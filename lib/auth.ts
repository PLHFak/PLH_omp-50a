// Password gate shared by the middleware and the login route.
// The password lives only in the SITE_PASSWORD environment variable on the server.
// The cookie holds an HMAC derived from it, so changing the password logs everyone out.

export const COOKIE_NAME = "omp50a_access";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

const enc = new TextEncoder();

async function hmacHex(key: string, message: string): Promise<string> {
  const k = await crypto.subtle.importKey(
    "raw",
    enc.encode(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", k, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function expectedToken(): Promise<string | null> {
  const pw = process.env.SITE_PASSWORD;
  if (!pw) return null;
  return hmacHex(pw, "omp-50a-access-v1");
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
