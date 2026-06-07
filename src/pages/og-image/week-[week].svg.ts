import { pregnancyData } from '../../data/pregnancyData';

export async function getStaticPaths() {
  return Array.from({ length: 40 }, (_, i) => {
    const week = String(i + 1);
    return {
      params: { week }
    };
  });
}

export async function GET({ params }: { params: { week: string } }) {
  const weekNum = parseInt(params.week);
  const data = pregnancyData.find((d) => d.week === weekNum);
  
  if (!data) {
    return new Response('Not found', { status: 404 });
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f0d19" />
      <stop offset="50%" stop-color="#1b162e" />
      <stop offset="100%" stop-color="#0b0a12" />
    </linearGradient>
    
    <!-- Accent Circle Gradient -->
    <radialGradient id="circleGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2997ff" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#0066cc" stop-opacity="0" />
    </radialGradient>

    <!-- Glowing blob gradient -->
    <linearGradient id="blob" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0066cc" />
      <stop offset="100%" stop-color="#9b5de5" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Circular Decorative Background Elements -->
  <circle cx="950" cy="315" r="450" fill="url(#circleGrad)" />
  <circle cx="950" cy="315" r="300" fill="none" stroke="#0066cc" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="10 5" />
  <circle cx="950" cy="315" r="180" fill="none" stroke="#2997ff" stroke-width="1.5" stroke-opacity="0.4" />
  
  <!-- Glowing baby size reference circle -->
  <circle cx="950" cy="315" r="80" fill="url(#blob)" opacity="0.85" filter="blur(8px)" />

  <!-- Logo and Branding -->
  <g transform="translate(80, 80)">
    <text font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="24" fill="#2997ff" letter-spacing="2">🌸 PREGWEEKS.COM</text>
    <text font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="16" fill="#8e8e93" x="0" y="30">Your Week-by-Week Pregnancy Companion</text>
  </g>

  <!-- Left Content Column -->
  <g transform="translate(80, 240)">
    <!-- Week Indicator Badge -->
    <rect width="140" height="36" rx="18" fill="#0066cc" fill-opacity="0.2" stroke="#0066cc" stroke-width="1.5" />
    <text font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="14" fill="#2997ff" x="70" y="22" text-anchor="middle" letter-spacing="1">WEEK ${weekNum}</text>

    <!-- Main Title -->
    <text font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="56" fill="#ffffff" x="0" y="100" letter-spacing="-1">Pregnancy Week ${weekNum}</text>
    
    <!-- Size Description -->
    <text font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="28" fill="#eae6f3" x="0" y="160">Baby is the size of a ${data.babySize.name}</text>

    <!-- Measurements (if week > 3) -->
    ${data.babySize.lengthCm > 0 ? `
    <g transform="translate(0, 210)">
      <rect width="180" height="80" rx="12" fill="#ffffff" fill-opacity="0.03" stroke="#ffffff" stroke-opacity="0.1" />
      <text font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="12" fill="#8e8e93" x="20" y="30" letter-spacing="1">LENGTH</text>
      <text font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="22" fill="#ffffff" x="20" y="60">${data.babySize.lengthCm} cm</text>
      
      <rect x="200" width="180" height="80" rx="12" fill="#ffffff" fill-opacity="0.03" stroke="#ffffff" stroke-opacity="0.1" />
      <text font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="12" fill="#8e8e93" x="220" y="30" letter-spacing="1">WEIGHT</text>
      <text font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="22" fill="#ffffff" x="220" y="60">${data.babySize.weightG} g</text>
    </g>
    ` : `
    <text font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="18" fill="#8e8e93" x="0" y="220" font-style="italic">Organogenesis &amp; early embryonic development</text>
    `}
  </g>

  <!-- Right Visual Callout Text -->
  <g transform="translate(950, 315)">
    <text font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="14" fill="#ffffff" x="0" y="-120" text-anchor="middle" letter-spacing="1">SIZE COMPARISON</text>
    <text font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="22" fill="#ffffff" x="0" y="10" text-anchor="middle">${data.babySize.name}</text>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
