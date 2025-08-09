// middleware.ts (in root)

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedIn = true;

  const protectedPaths = ["/dashboard"];

  const pathname = req.nextUrl.pathname;

  if (protectedPaths.some((path) => pathname.startsWith(path)) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/register", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
