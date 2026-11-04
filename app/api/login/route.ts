import { NextResponse } from "next/server";
import { COOKIE_MAX_AGE, COOKIE_NAME, expectedToken, safeEqual } from "@/lib/auth";
import { COMMON, WHO_COOKIE, lookupCode, signWho, whoCookieOptions } from "@/lib/omp";

export const runtime = "edge";

export async function POST(req: Request) {
  const form = await req.formData();
  return enter(String(form.get("password") ?? "").trim(), form.get("lang") === "fr" ? "fr" : "en", new URL(req.url));
}

// Direct link: /api/login?c=CODE&lang=fr opens the site with a personal code, without typing it.
export async function GET(req: Request) {
  const u = new URL(req.url);
  return enter((u.searchParams.get("c") ?? "").trim(), u.searchParams.get("lang") === "fr" ? "fr" : "en", u);
}

async function enter(password: string, lang: "fr" | "en", base: URL) {
  const expected = await expectedToken();

  if (!expected) {
    return NextResponse.redirect(new URL(`/login?error=config&lang=${lang}`, base), 303);
  }

  // Constant-time comparison of what was typed with the server-side password.
  // Case-insensitive, so "ECHOOMP2026" and "echoomp2026" are both accepted.
  const pwEnv = process.env.SITE_PASSWORD as string;
  const shared = safeEqual(password.toUpperCase(), pwEnv.trim().toUpperCase());
  // Personal codes (trigram + OMP + 2026) carrying the "vitrine" zone also open the site.
  const row = shared || !password ? null : await lookupCode(password);
  const ok = shared || (!!row && row.zones.includes("vitrine"));
  if (!ok) {
    await new Promise((r) => setTimeout(r, 600)); // slow down guessing
    return NextResponse.redirect(new URL(`/login?error=1&lang=${lang}`, base), 303);
  }

  const res = NextResponse.redirect(new URL(`/?lang=${lang}`, base), 303);
  res.cookies.set(COOKIE_NAME, expected, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
  const who = await signWho(row ? row.code : COMMON);
  if (who) res.cookies.set(WHO_COOKIE, who, whoCookieOptions);
  return res;
}
