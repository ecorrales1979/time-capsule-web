import decode from "jwt-decode";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

interface User {
  sub: string;
  name: string;
  avatarUrl: string;
}

export const cookieTokenName = "spacetime-token";

export const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

function getCookies() {
  return require("next/headers").cookies;
}

export function getUser(): User {
  const cookies = getCookies();
  const token = cookies().get(cookieTokenName)?.value;

  if (!token) {
    throw new Error("Unauthenticated");
  }

  const user = decode<User>(token);

  return user;
}

export function isAuthenticated(
  injectedCookies?: ReadonlyRequestCookies
): boolean {
  if (injectedCookies) {
    return injectedCookies.has(cookieTokenName);
  }
  const cookies = getCookies();
  return cookies().has(cookieTokenName);
}

export async function getToken() {
  const cookies = getCookies();
  const token = cookies().get(cookieTokenName)?.value;
  return token;
}
