import { NextRequest, NextResponse } from "next/server";

import { cookieTokenName } from "@/definitions";
import { api } from "@/lib/api";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");

  const registerResponse = await api.post<{ token: string }>("/register", {
    code,
  });

  const { token } = registerResponse.data;

  const redirectUrl = new URL("/", request.url);
  const tokenExpiresInSeconds = 60 * 60 * 24 * 30; // 30 days

  return NextResponse.redirect(redirectUrl, {
    headers: {
      "Set-Cookie": `${cookieTokenName}=${token}; Path=/; max-age=${tokenExpiresInSeconds}`,
    },
  });
}