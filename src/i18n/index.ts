import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import ja from './ja.json';
import ms from './ms.json';
import zh from './zh.json';

export const messages = { en, zh, ms, ja, es, fr } as const;

export type Locale = keyof typeof messages;

export const LOCALES: Locale[] = ['en', 'zh', 'ms', 'ja', 'es', 'fr'];
