import type { Locale } from './index';

/** `<html lang>` */
export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-Hans',
  ms: 'ms',
  ja: 'ja',
  es: 'es',
  fr: 'fr',
};

/** `hreflang` and sitemap `i18n.locales` values (letters and hyphens only). */
export const HREFLANG: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
  ms: 'ms',
  ja: 'ja',
  es: 'es',
  fr: 'fr',
};

/** Open Graph `og:locale` */
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  ms: 'ms_MY',
  ja: 'ja_JP',
  es: 'es_ES',
  fr: 'fr_FR',
};
