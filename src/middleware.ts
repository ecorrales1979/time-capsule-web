import { NextRequest, NextResponse } from "next/server";

import { isAuthenticated, signInUrl } from "./lib/auth";

export function middleware(request: NextRequest) {
  if (!isAuthenticated(request.cookies)) {
    return NextResponse.redirect(signInUrl, {
      headers: {
        "Set-Cookie": `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20`,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/memories/:path*",
};
