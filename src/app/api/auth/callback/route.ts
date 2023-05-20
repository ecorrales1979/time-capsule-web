import { NextRequest, NextResponse } from "next/server";

import { api } from "@/lib/api";
import { cookieTokenName } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");

  const redirectTo = request.cookies.get("redirectTo")?.value;

  const registerResponse = await api.post<{ token: string }>("/register", {
    code,
  });

  const { token } = registerResponse.data;

  const redirectUrl = redirectTo ?? new URL("/", request.url);
  const tokenExpiresInSeconds = 60 * 60 * 24 * 30; // 30 days

  return NextResponse.redirect(redirectUrl, {
    headers: {
      "Set-Cookie": `${cookieTokenName}=${token}; Path=/; max-age=${tokenExpiresInSeconds}`,
    },
  });
}
