import { NextResponse } from "next/server";
import { COMMON, WHO_COOKIE, readWho, rpc } from "@/lib/omp";

export const runtime = "edge";

export async function POST(req: Request) {
  const cookie = req.headers.get("cookie") ?? "";
  const m = cookie.match(new RegExp(`(?:^|; )${WHO_COOKIE}=([^;]+)`));
  const who = (await readWho(m ? decodeURIComponent(m[1]) : undefined)) ?? COMMON;
  let b: { sid?: string; path?: string; sec?: number; view?: boolean } = {};
  try { b = await req.json(); } catch {}
  if (!b.sid || !/^[0-9a-f-]{36}$/i.test(b.sid) || typeof b.path !== "string") return new NextResponse(null, { status: 204 });
  await rpc("omp_track", {
    p_code: who, p_session: b.sid, p_site: "vitrine", p_path: b.path,
    p_seconds: Math.max(0, Math.min(120, Number(b.sec) || 0)), p_ua: req.headers.get("user-agent") ?? "", p_view: !!b.view,
  });
  return new NextResponse(null, { status: 204 });
}
