/**
 * Cloudflare Worker: after contact form submit, send a WhatsApp to your team.
 *
 * Setup (WhatsApp Cloud API — the "from" number is your registered business line, e.g. 01164906195):
 * 1. Meta Business + WhatsApp Cloud API: https://developers.facebook.com/docs/whatsapp/cloud-api
 * 2. Get permanent access token, Phone number ID for the sender (01164906195 line).
 * 3. Recipient E.164 without +: 60164750789 (0164750789)
 * 4. First-time / template rules: Meta may require an approved template for outbound messages.
 *
 * Deploy: wrangler deploy (or paste into Cloudflare dashboard as Worker)
 * Secrets: NOTIFY_SECRET, WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID
 * Optional var: TO_WHATSAPP=60164750789
 */

const TO_DEFAULT = '60164750789';

export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: cors });
    }

    const auth = request.headers.get('Authorization');
    const secret = env.NOTIFY_SECRET;
    if (!secret || auth !== `Bearer ${secret}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    const text = [
      '*Opero — new contact form*',
      `Name: ${data.name || '—'}`,
      `Email: ${data.email || '—'}`,
      `Company: ${data.company || '—'}`,
      `WhatsApp: ${data.whatsapp || '—'}`,
      `Service: ${data.service || '—'}`,
      `Message: ${data.message || '—'}`,
    ]
      .join('\n')
      .slice(0, 4096);

    const phoneNumberId = env.WHATSAPP_PHONE_NUMBER_ID;
    const token = env.WHATSAPP_TOKEN;
    const to = (env.TO_WHATSAPP || TO_DEFAULT).replace(/\D/g, '');

    if (!phoneNumberId || !token) {
      return new Response(
        JSON.stringify({ error: 'Worker missing WHATSAPP_TOKEN or WHATSAPP_PHONE_NUMBER_ID' }),
        { status: 500, headers: { ...cors, 'Content-Type': 'application/json' } },
      );
    }

    const res = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to,
        type: 'text',
        text: { preview_url: false, body: text },
      }),
    });

    const raw = await res.text();
    return new Response(raw, {
      status: res.ok ? 200 : 502,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  },
};
