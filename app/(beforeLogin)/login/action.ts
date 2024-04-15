"use server";

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export const setCookie = async (token: string) => {
  const cookie = cookies();
  cookie.set("TOKEN", token);
  redirect("/home");
};
