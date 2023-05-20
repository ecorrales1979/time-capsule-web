import { NextRequest, NextResponse } from "next/server";

import { cookieTokenName } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const redirectUrl = new URL("/", request.url);

  return NextResponse.redirect(redirectUrl, {
    headers: {
      "Set-Cookie": `${cookieTokenName}=; Path=/; max-age=0`,
    },
  });
}
