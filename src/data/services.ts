/**
 * Service slugs used in routes and translation keys under `services.detail.<slug>`.
 */
export const SERVICE_SLUGS = [
  'mobile',
  'web',
  'portal',
  'systems',
  'consulting',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}
