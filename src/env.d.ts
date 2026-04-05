/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** POST URL from Formspree, Web3Forms, etc. Exposed to the client for the contact form action. */
  readonly PUBLIC_CONTACT_FORM_ACTION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
