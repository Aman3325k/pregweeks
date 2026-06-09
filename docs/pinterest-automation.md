# Autopilot Pinterest Marketing Bot Architecture

Since **pregweeks.com** is a serverless, static website (output: 'static'), it does not have a backend server to generate images or trigger APIs. Instead, we use an external automation bot executing on a cron scheduler (e.g. daily) to render pages, scrape metadata, extract shareable graphics, and publish them to Pinterest.

---

## Workflow Diagram

```mermaid
graph TD
    A[Daily Cron Job - 2:00 AM] --> B[Execute python-playwright scraper]
    B --> C[Loop Weeks 1 to 40]
    C --> D[Open local static route: /week/{N}]
    D --> E[Scrape Fetal Size & Emoji]
    D --> F[Trigger canvas.toDataURL click event]
    F --> G[Extract High-Res 1080x1080 PNG]
    G --> H[Send HTTP POST payload to n8n Webhook]
    H --> I[n8n Workflow Node]
    I --> J[Fetch Pinterest Board Access Token]
    J --> K[POST to Pinterest API /pins]
    K --> L[Published Pin with SEO link back to /week/{N}]
```

---

## 1. Playwright Scraping & Rendering Script (`bot/render_pins.py`)

This Python script launches a headless browser, navigates to the static week-by-week guides, extracts the milestone data, programmatically triggers the canvas rendering, downloads the file, and posts the details to a webhook.

```python
import os
import time
import requests
from playwright.sync_api import sync_playwright

WEBHOOK_URL = "https://your-n8n-instance.com/webhook/pregweeks-pinterest"
SITE_BASE_URL = "http://localhost:4321" # Or staging/production URL

def run_automation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for week in range(1, 41):
            try:
                # 1. Open target week page
                week_url = f"{SITE_BASE_URL}/week/{week}"
                print(f"Loading {week_url}...")
                page.goto(week_url)
                
                # 2. Extract metadata details
                baby_size_name = page.locator("h1").inner_text().split(":")[-1].strip()
                meta_desc = page.locator("meta[name='description']").get_attribute("content")
                
                # 3. Simulate click or run script to draw the Canvas
                # Since the InstagramMilestone is rendered inside the page, 
                # we query the canvas node
                canvas_selector = "#milestone-share-canvas"
                page.wait_for_selector(canvas_selector)
                
                # Programmatically click the draw/share trigger to render the canvas
                page.click("#btn-share-milestone")
                time.sleep(1) # wait for canvas context drawing

                # 4. Extract base64 image data URL from the drawn canvas
                img_data_url = page.evaluate(
                    f"document.querySelector('{canvas_selector}').toDataURL('image/png')"
                )
                
                # 5. Build payload
                payload = {
                    "week": week,
                    "title": f"Pregnancy Week {week} Size Guide: {baby_size_name} 🌸",
                    "description": f"Wondering how big your baby is at week {week} of pregnancy? {meta_desc} Learn about fetal development, mother symptoms, and download check lists.",
                    "link": week_url,
                    "image_data": img_data_url # Base64 PNG
                }

                # 6. Post to n8n Webhook
                response = requests.post(WEBHOOK_URL, json=payload)
                print(f"Week {week} sent to n8n. Status code: {response.status_code}")
                
            except Exception as e:
                print(f"Error scraping Week {week}: {e}")
                
        browser.close()

if __name__ == "__main__":
    run_automation()
```

---

## 2. n8n Pipeline Node Setup

To avoid storing Pinterest tokens or credentials client-side, **n8n** is used to coordinate webhook ingestion and token refreshes.

### Node 1: Webhook Listener
- **Path**: `/webhook/pregweeks-pinterest`
- **Method**: `POST`
- **Format**: `JSON`

### Node 2: Decode Base64 & Upload
- Parse `image_data` from request.
- Extract prefix (e.g. `data:image/png;base64,`) and save as a binary file inside n8n or upload it to a cloud bucket (S3, Cloudinary) to get a static URL (Pinterest API requires a public URL for the pin image).
- Example JS Node logic:
  ```javascript
  const base64Data = items[0].json.image_data.split(',')[1];
  // Upload to Cloudinary/Imgur/S3 to obtain a permanent media URL
  const uploadUrl = await uploadToCloud(base64Data);
  items[0].json.pin_image_url = uploadUrl;
  return items;
  ```

### Node 3: Pinterest Node API Action
- Use OAuth2 to authenticate with your Pinterest Creator profile.
- Action: **Create Pin**
- Fields:
  - **Board**: Select your "Pregnancy Week by Week Guide" board.
  - **Title**: `{{ $node["Webhook"].json["title"] }}`
  - **Description**: `{{ $node["Webhook"].json["description"] }}`
  - **Link**: `{{ $node["Webhook"].json["link"] }}`
  - **Image URL**: `{{ $node["JS Upload Node"].json["pin_image_url"] }}`

---

## 3. SEO Optimization Strategy for Pins

To ensure high organic traffic conversions from Pinterest search queries to **pregweeks.com**:
1. **Dynamic Pin Titles**: Structure titles using primary search keywords (e.g. `Pregnancy Week 14 Size`, `How big is baby at 20 weeks pregnant`).
2. **First Sentence Hook**: Mention the fetal fruit size immediately (e.g., `🍋 Baby is the size of a lemon at week 14!`).
3. **Hashtag Matrix**: Append 4-5 relevant keywords at the end of the description: `#pregnancyweekbyweek #pregnancyguide #pregnancysymptoms #babydevelopment #duecalculator`.
4. **Rich Pin Schema**: Because our week pages contain `MedicalWebPage` and `SoftwareApplication` JSON-LD schemas, Pinterest will automatically parse these pages as Rich Pins, rendering reviews and titles in bold.
