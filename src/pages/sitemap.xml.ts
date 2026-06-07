import type { APIRoute } from 'astro';

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
  ];

  // Generate URLs for all 40 pregnancy weeks
  for (let i = 1; i <= 40; i++) {
    baseUrls.push(`https://pregweeks.com/week/${i}`);
  }

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
    } else if (url.includes('/tools/')) {
      priority = '0.7';
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
