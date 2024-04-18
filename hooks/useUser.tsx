"use client";

import {Query} from "@/lib/__generated__/graphql";
import {existsTokenStore} from "@/store/loginStore";
import {gql, useQuery} from "@apollo/client";
import {useEffect} from "react";
import {logoutCookie} from "./action";
import {useRouter} from "next/navigation";

const IS_ME = gql(`
    query seeMyprofile {
  seeMyprofile {
    id
    email
    username
    phone
    firstName
    lastName
  }
}
`);

const useUser = () => {
  const {existsUser, logOutUserState} = existsTokenStore();
  const {data, error, loading} = useQuery<Query>(IS_ME, {skip: !existsUser});
  const router = useRouter();
  useEffect(() => {
    if (existsUser === false) {
      logOutUserState();
      logoutCookie();
      router.replace("/");
    }
  }, [data, error, existsUser, logOutUserState, router]);

  return {data, error, loading};
};

export default useUser;
