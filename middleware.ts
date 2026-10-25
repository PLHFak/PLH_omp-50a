import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_NAME, expectedToken, safeEqual } from "./lib/auth";

// Everything (pages, photos, video) is behind the password, except the login page itself.
export const config = {
  matcher: ["/((?!login|api/login|_next/static|_next/image|favicon.ico|robots.txt).*)"],
};

export async function middleware(req: NextRequest) {
  const expected = await expectedToken();
  const got = req.cookies.get(COOKIE_NAME)?.value ?? "";
  if (expected && got && safeEqual(got, expected)) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}
