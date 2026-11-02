// Personal access codes and visit tracking (shared by the hub and the showcase site).
// Data lives in Supabase (schema "omp"), reached only through security-definer RPC functions.
// Env: OMP_SUPABASE_URL, OMP_SUPABASE_KEY, OMP_SECRET (cookie signing), OMP_ADMIN (admin secret, hub only).

export const WHO_COOKIE = "omp_who";
export const ADMIN_COOKIE = "omp_admin";
export const COMMON = "COMMUN";

const enc = new TextEncoder();

async function hmac(key: string, msg: string): Promise<string> {
  const k = await crypto.subtle.importKey("raw", enc.encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", k, enc.encode(msg));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function same(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export async function signWho(code: string): Promise<string | null> {
  const s = process.env.OMP_SECRET;
  return s ? `${code}.${await hmac(s, "who:" + code)}` : null;
}

export async function readWho(cookie: string | undefined): Promise<string | null> {
  const s = process.env.OMP_SECRET;
  if (!s || !cookie) return null;
  const i = cookie.lastIndexOf(".");
  if (i < 1) return null;
  const code = cookie.slice(0, i);
  return same(cookie.slice(i + 1), await hmac(s, "who:" + code)) ? code : null;
}

export async function adminToken(): Promise<string | null> {
  const a = process.env.OMP_ADMIN, s = process.env.OMP_SECRET;
  return a && s ? hmac(s, "admin:" + a) : null;
}

export async function isAdmin(cookie: string | undefined): Promise<boolean> {
  const t = await adminToken();
  return !!t && !!cookie && same(cookie, t);
}

export async function rpc<T = unknown>(fn: string, args: Record<string, unknown>): Promise<T | null> {
  const url = process.env.OMP_SUPABASE_URL, key = process.env.OMP_SUPABASE_KEY;
  if (!url || !key) return null;
  try {
    const r = await fetch(`${url}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(args),
      cache: "no-store",
    });
    if (!r.ok) return null;
    const text = await r.text();
    return (text ? JSON.parse(text) : null) as T;
  } catch {
    return null;
  }
}

export type CodeRow = { code: string; name: string; zones: string[] };

export async function lookupCode(typed: string): Promise<CodeRow | null> {
  const rows = await rpc<CodeRow[]>("omp_login", { p_code: typed.trim().toUpperCase() });
  return rows && rows.length ? rows[0] : null;
}

export const whoCookieOptions = { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/", maxAge: 60 * 60 * 24 * 30 };
