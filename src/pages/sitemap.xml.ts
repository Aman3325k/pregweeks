import type { APIRoute } from 'astro';
import { foodItems } from '../data/foodData';
import { symptomItems } from '../data/symptomData';
import { babyNames } from '../data/namesData';

export const GET: APIRoute = async () => {
  const baseUrls = [
    'https://pregweeks.com',
    'https://pregweeks.com/tools/due-date-calculator',
    'https://pregweeks.com/tools/kick-counter',
    'https://pregweeks.com/tools/contraction-timer',
    'https://pregweeks.com/checklist/hospital-bag',
    'https://pregweeks.com/trimester/first',
    'https://pregweeks.com/trimester/second',
    'https://pregweeks.com/trimester/third',
    'https://pregweeks.com/symptoms',
    'https://pregweeks.com/nutrition',
    'https://pregweeks.com/faq',
    // Phase 1 Expansion
    'https://pregweeks.com/food-safety',
    'https://pregweeks.com/tools/ivf-calculator',
    'https://pregweeks.com/tools/weight-tracker',
    'https://pregweeks.com/tools/birth-plan',
    'https://pregweeks.com/partner',
    'https://pregweeks.com/milestone',
    'https://pregweeks.com/postpartum',
    'https://pregweeks.com/tools/gender-prediction',
    'https://pregweeks.com/quiz/can-i-eat-this',
    'https://pregweeks.com/medication-safety',
    'https://pregweeks.com/prenatal-vitamins',
    // Phase 2 Expansion
    'https://pregweeks.com/baby-names',
    'https://pregweeks.com/tools/ovulation-calculator',
    'https://pregweeks.com/quiz/am-i-pregnant',
    'https://pregweeks.com/pregnancy-announcement',
    'https://pregweeks.com/checklist/baby-shower',
    // Info & SEO Pages
    'https://pregweeks.com/about',
    'https://pregweeks.com/contact',
    'https://pregweeks.com/privacy-policy',
    'https://pregweeks.com/terms',
    'https://pregweeks.com/disclaimer',
  ];

  // Generate URLs for all 40 pregnancy weeks
  for (let i = 1; i <= 40; i++) {
    baseUrls.push(`https://pregweeks.com/week/${i}`);
  }

  // Generate URLs for all 40 weekly partner guides
  for (let i = 1; i <= 40; i++) {
    baseUrls.push(`https://pregweeks.com/partner/${i}`);
  }

  // Generate URLs for all 12 weekly postpartum recovery guides
  for (let i = 1; i <= 12; i++) {
    baseUrls.push(`https://pregweeks.com/postpartum/${i}`);
  }

  // Generate URLs for all individual food safety pages (103)
  foodItems.forEach((food) => {
    baseUrls.push(`https://pregweeks.com/food/${food.slug}`);
  });

  // Generate URLs for all individual symptom guide pages (32)
  symptomItems.forEach((symptom) => {
    baseUrls.push(`https://pregweeks.com/symptoms/${symptom.slug}`);
  });

  // Generate URLs for all individual baby names pages (500)
  babyNames.forEach((name) => {
    baseUrls.push(`https://pregweeks.com/baby-names/${name.slug}`);
  });

  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${baseUrls.map((url) => {
    // Custom priority and frequency mapping
    let priority = '0.6';
    let freq = 'monthly';

    if (url === 'https://pregweeks.com') {
      priority = '1.0';
      freq = 'weekly';
    } else if (url.includes('/week/')) {
      priority = '0.8';
      freq = 'monthly';
    } else if (url.includes('/tools/') || url.includes('/milestone') || url.includes('/quiz/')) {
      priority = '0.7';
      freq = 'monthly';
    } else if (url.includes('/food-safety') || url.includes('/medication-safety') || url.includes('/prenatal-vitamins') || url.includes('/baby-names')) {
      priority = '0.75';
      freq = 'monthly';
    }

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    },
  });
};
