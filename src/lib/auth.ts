import { cookies } from "next/headers";
import decode from "jwt-decode";

import { cookieTokenName } from "@/definitions";

interface User {
  sub: string;
  name: string;
  avatarUrl: string;
}

export function getUser(): User {
  const token = cookies().get(cookieTokenName)?.value;

  if (!token) {
    throw new Error("Unauthenticated");
  }

  const user = decode<User>(token);

  return user;
}
