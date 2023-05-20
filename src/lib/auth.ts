import { cookies } from "next/headers";
import decode from "jwt-decode";

interface User {
  sub: string;
  name: string;
  avatarUrl: string;
}

export const cookieTokenName = "spacetime-token";

export function getUser(): User {
  const token = cookies().get(cookieTokenName)?.value;

  if (!token) {
    throw new Error("Unauthenticated");
  }

  const user = decode<User>(token);

  return user;
}

export function isAuthenticated(): boolean {
  return cookies().has(cookieTokenName);
}
