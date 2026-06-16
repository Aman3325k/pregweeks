import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { foodItems } from '../data/foodData';
import { symptomItems } from '../data/symptomData';
import { babyNames } from '../data/namesData';
import { glossaryTerms } from '../data/glossaryData';
import { pregnancyConditions } from '../data/conditionsData';
import { laborGuides } from '../data/laborData';

export const GET: APIRoute = async () => {
  const baseUrls = [
    'https://pregweeks.com/',
    'https://pregweeks.com/tools/due-date-calculator/',
    'https://pregweeks.com/tools/kick-counter/',
    'https://pregweeks.com/tools/contraction-timer/',
    'https://pregweeks.com/checklist/hospital-bag/',
    'https://pregweeks.com/trimester/first/',
    'https://pregweeks.com/trimester/second/',
    'https://pregweeks.com/trimester/third/',
    'https://pregweeks.com/symptoms/',
    'https://pregweeks.com/nutrition/',
    'https://pregweeks.com/faq/',
    'https://pregweeks.com/blog/',
    'https://pregweeks.com/food/sushi/',
    // Phase 1 Expansion
    'https://pregweeks.com/food-safety/',
    'https://pregweeks.com/tools/ivf-calculator/',
    'https://pregweeks.com/tools/weight-tracker/',
    'https://pregweeks.com/tools/birth-plan/',
    'https://pregweeks.com/partner/',
    'https://pregweeks.com/milestone/',
    'https://pregweeks.com/postpartum/',
    'https://pregweeks.com/tools/gender-prediction/',
    'https://pregweeks.com/quiz/can-i-eat-this/',
    'https://pregweeks.com/medication-safety/',
    'https://pregweeks.com/prenatal-vitamins/',
    // Phase 2 Expansion
    'https://pregweeks.com/baby-names/',
    'https://pregweeks.com/tools/ovulation-calculator/',
    'https://pregweeks.com/quiz/am-i-pregnant/',
    'https://pregweeks.com/pregnancy-announcement/',
    'https://pregweeks.com/checklist/baby-shower/',
    // Info & SEO Pages
    'https://pregweeks.com/about/',
    'https://pregweeks.com/contact/',
    'https://pregweeks.com/privacy-policy/',
    'https://pregweeks.com/terms/',
    'https://pregweeks.com/disclaimer/',
    // Phase 3 Professional Features & Guides
    'https://pregweeks.com/glossary/',
    'https://pregweeks.com/compare/',
    'https://pregweeks.com/conditions/',
    'https://pregweeks.com/labor/',
    'https://pregweeks.com/calculators/',
    'https://pregweeks.com/when-to-take-pregnancy-test/',
    'https://pregweeks.com/early-pregnancy-signs/',
    'https://pregweeks.com/overdue/',
    'https://pregweeks.com/sources/',
    'https://pregweeks.com/tools/baby-cost-calculator/',
    'https://pregweeks.com/tools/journal/',
    'https://pregweeks.com/checklist/nursery/',
    'https://pregweeks.com/checklist/baby-gear/',
  ];

  const blogPosts = await getCollection('blog');
  blogPosts.forEach((post) => {
    baseUrls.push(`https://pregweeks.com/blog/${post.id}/`);
  });

  const mdxSymptoms = await getCollection('symptoms');
  const mdxFood = await getCollection('food');

  // Generate URLs for all 40 pregnancy weeks
  for (let i = 1; i <= 40; i++) {
    baseUrls.push(`https://pregweeks.com/week/${i}/`);
  }

  // Generate URLs for all 40 weekly partner guides
  for (let i = 1; i <= 40; i++) {
    baseUrls.push(`https://pregweeks.com/partner/${i}/`);
  }

  // Generate URLs for all 12 weekly postpartum recovery guides
  for (let i = 1; i <= 12; i++) {
    baseUrls.push(`https://pregweeks.com/postpartum/${i}/`);
  }

  // Generate URLs for all individual food safety pages (103)
  foodItems.forEach((food) => {
    baseUrls.push(`https://pregweeks.com/food/${food.slug}/`);
  });
  // Add migrated food pages
  mdxFood.forEach((food) => {
    if (!foodItems.some(f => f.slug === food.id)) {
      baseUrls.push(`https://pregweeks.com/food/${food.id}/`);
    }
  });

  // Generate URLs for all individual symptom guide pages (32)
  symptomItems.forEach((symptom) => {
    baseUrls.push(`https://pregweeks.com/symptoms/${symptom.slug}/`);
  });
  // Add migrated symptom pages
  mdxSymptoms.forEach((symptom) => {
    if (!symptomItems.some(s => s.slug === symptom.id)) {
      baseUrls.push(`https://pregweeks.com/symptoms/${symptom.id}/`);
    }
  });

  // Generate URLs for all individual baby names pages (500)
  babyNames.forEach((name) => {
    baseUrls.push(`https://pregweeks.com/baby-names/${name.slug}/`);
  });

  // Generate URLs for all individual glossary term pages (105)
  glossaryTerms.forEach((term) => {
    baseUrls.push(`https://pregweeks.com/glossary/${term.slug}/`);
  });

  // Generate URLs for all individual pregnancy condition pages (6)
  pregnancyConditions.forEach((cond) => {
    baseUrls.push(`https://pregweeks.com/conditions/${cond.slug}/`);
  });

  // Generate URLs for all individual labor guide pages (6)
  laborGuides.forEach((guide) => {
    baseUrls.push(`https://pregweeks.com/labor/${guide.slug}/`);
  });

  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${baseUrls.map((url) => {
    // Custom priority and frequency mapping
    let priority = '0.6';
    let freq = 'monthly';

    if (url === 'https://pregweeks.com' || url === 'https://pregweeks.com/') {
      priority = '1.0';
      freq = 'weekly';
    } else if (url.includes('/week/')) {
      priority = '0.9';
      freq = 'monthly';
    } else if (url === 'https://pregweeks.com/blog/') {
      priority = '0.9';
      freq = 'weekly';
    } else if (url.includes('/blog/')) {
      priority = '0.8';
      freq = 'monthly';
    } else if (url.includes('/tools/') || url.includes('/calculators')) {
      priority = '0.8';
      freq = 'monthly';
    } else if (url.includes('/food/') || url.includes('/symptoms/')) {
      priority = '0.8';
      freq = 'monthly';
    } else if (
      url.includes('/trimester/') ||
      url.includes('/labor/') ||
      url.includes('/conditions/') ||
      url.includes('/baby-names')
    ) {
      priority = '0.7';
      freq = 'monthly';
    } else if (
      url.includes('/privacy-policy') ||
      url.includes('/terms') ||
      url.includes('/disclaimer')
    ) {
      priority = '0.3';
      freq = 'yearly';
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
