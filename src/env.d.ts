/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** POST URL from Formspree, Web3Forms, etc. Exposed to the client for the contact form action. */
  readonly PUBLIC_CONTACT_FORM_ACTION?: string;
  /** Cloudflare Worker URL that sends WhatsApp (Meta API). See workers/whatsapp-notify/worker.mjs */
  readonly PUBLIC_NOTIFY_URL?: string;
  /** Must match Worker NOTIFY_SECRET (still visible in client; use Worker rate limits). */
  readonly PUBLIC_NOTIFY_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
