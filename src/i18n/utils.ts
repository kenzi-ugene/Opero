import type { Messages } from './types';
import { LOCALES } from './index';

const KNOWN_LOCALE_PREFIXES = new Set<string>(LOCALES);

/**
 * Path segments after the locale prefix (e.g. `/en/services/mobile` → `services/mobile`).
 */
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && KNOWN_LOCALE_PREFIXES.has(segments[0])) {
    return segments.slice(1).join('/');
  }
  return segments.join('/');
}

/**
 * Resolve a dotted key path in nested translation objects.
 *
 * @param messages Locale dictionary
 * @param key Dot-separated path (e.g. `nav.home`)
 * @returns Resolved string or the key if missing
 */
export function t(messages: Messages, key: string): string {
  const parts = key.split('.');
  let cur: unknown = messages;
  for (const p of parts) {
    if (cur === null || typeof cur !== 'object') {
      return key;
    }
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === 'string' ? cur : key;
}
