export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  
  // Check if it's a GET request and targeting an HTML asset or clean directory URL.
  const isGet = request.method === 'GET';
  const isHtml = !url.pathname.includes('.') || url.pathname.endsWith('.html');
  
  // Return the default response directly for non-GET or non-HTML requests
  if (!isGet || !isHtml) {
    return context.next();
  }

  const country = request.cf?.country || request.headers.get('cf-ipcountry');
  
  const euCountries = new Set([
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT',
    'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB'
  ]);
  
  let region = 'EU'; // Default to EU as safe fallback
  if (country) {
    const countryUpper = country.toUpperCase();
    if (!euCountries.has(countryUpper)) {
      region = 'OTHER';
    }
  }
  
  // SEO Protection: Construct a synthetic cache key URL purely for internal Edge Cache API lookup.
  // This query parameter is NEVER returned in redirects, Location headers, or visible URLs.
  const cacheKeyUrl = new URL(request.url);
  cacheKeyUrl.searchParams.set('__cf_region_cache', region);
  const cacheKey = new Request(cacheKeyUrl.toString(), request);
  const cache = caches.default;
  
  let response = await cache.match(cacheKey);
  
  if (!response) {
    // Cache miss: retrieve the static asset response from the Pages origin asset server
    const assetResponse = await context.next();
    
    const contentType = assetResponse.headers.get('content-type') || '';
    if (assetResponse.status === 200 && contentType.includes('text/html')) {
      // Use Cloudflare HTMLRewriter to inject the region script directly into the HTML response body
      const rewriter = new HTMLRewriter().on("head", {
        element(element) {
          element.append(
            `<script>window.__VISITOR_REGION__ = "${region}";</script>`,
            { html: true }
          );
        }
      });
      
      const transformedResponse = rewriter.transform(assetResponse);
      
      // Construct a mutable response to add custom caching headers
      response = new Response(transformedResponse.body, transformedResponse);
      response.headers.set('x-visitor-region', region);
      response.headers.set('x-region-cache-status', 'MISS');
      
      // Cache-Control Optimization: Tell Cloudflare Edge CDN to cache this region-specific
      // HTML version for 1 hour (s-maxage=3600), while requiring immediate browser revalidation
      // (max-age=0, must-revalidate) so visitors receive geographic updates if they travel.
      response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, must-revalidate');
      
      // Asynchronously store the cloned response in Cloudflare's cache
      const responseToCache = response.clone();
      context.waitUntil(cache.put(cacheKey, responseToCache));
    } else {
      // Return the asset response directly if not successful HTML
      response = assetResponse;
    }
  } else {
    // Cache hit: Construct mutable response copy to set hit tracing headers
    response = new Response(response.body, response);
    response.headers.set('x-region-cache-status', 'HIT');
  }
  
  return response;
}
