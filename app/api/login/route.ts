import { NextResponse } from "next/server";
import { COOKIE_MAX_AGE, COOKIE_NAME, expectedToken, safeEqual } from "@/lib/auth";

export const runtime = "edge";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "").trim();
  const lang = form.get("lang") === "fr" ? "fr" : "en";
  const expected = await expectedToken();
  const base = new URL(req.url);

  if (!expected) {
    return NextResponse.redirect(new URL(`/login?error=config&lang=${lang}`, base), 303);
  }

  // Constant-time comparison of what was typed with the server-side password.
  const pwEnv = process.env.SITE_PASSWORD as string;
  const ok = safeEqual(password, pwEnv);
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
  return res;
}
