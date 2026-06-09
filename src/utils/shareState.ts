// src/utils/shareState.ts
import { savePregnancyState } from './pregnancyState';

/**
 * Encodes a date string (YYYY-MM-DD) into a URL-safe Base64 string.
 */
export function encodeState(edd: string): string {
  try {
    const base64 = btoa(edd);
    // Convert base64 to URL-safe formatting: replace + and / with - and _
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  } catch (e) {
    console.error('Failed to encode share state:', e);
    return '';
  }
}

/**
 * Decodes a URL-safe Base64 string back to a validated date string (YYYY-MM-DD).
 */
export function decodeState(encoded: string): string | null {
  try {
    // Restore base64 formatting: replace - and _ with + and /
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    const decoded = atob(base64);
    
    // Validate that the output format matches YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(decoded)) {
      const time = Date.parse(decoded);
      if (!isNaN(time)) {
        return decoded;
      }
    }
  } catch (e) {
    console.error('Failed to decode share state:', e);
  }
  return null;
}

/**
 * Intercepts '?share=' from the URL query parameters, applies the state,
 * cleans the address bar without creating browser history entries, and reloads the window.
 */
export function decodeAndApplyState(): void {
  if (typeof window === 'undefined') return;
  
  try {
    const params = new URLSearchParams(window.location.search);
    const shareVal = params.get('share');
    if (!shareVal) return;

    const decodedDate = decodeState(shareVal);
    if (decodedDate) {
      // Save as active 'edd' tracking state in localStorage
      savePregnancyState(decodedDate, 'edd');

      // Strip the '?share=' query param to keep the link clean
      const url = new URL(window.location.href);
      url.searchParams.delete('share');
      window.history.replaceState({}, '', url.pathname + url.search);
      
      // Reload page to rehydrate UI layout from fresh state
      window.location.reload();
    }
  } catch (e) {
    console.error('Error in decodeAndApplyState:', e);
  }
}
