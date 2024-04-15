"use server";

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export const logoutCookie = () => {
  const cookie = cookies();
  cookie.delete("TOKEN");
  redirect("/");
};
