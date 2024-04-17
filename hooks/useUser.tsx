"use client";

import {Query} from "@/lib/__generated__/graphql";
import {existsTokenStore} from "@/store/loginStore";
import {gql, useQuery} from "@apollo/client";
import {useEffect} from "react";
import {logoutCookie} from "./action";

const IS_ME = gql(`
    query seeMyprofile {
  seeMyprofile {
    id
    email
    username
  }
}
`);

const useUser = () => {
  const {existsUser, logOutUserState} = existsTokenStore();
  const {data, error, loading} = useQuery<Query>(IS_ME, {skip: !existsUser});
  console.log(existsUser);
  useEffect(() => {
    if (existsUser === false) {
      logOutUserState();
      logoutCookie();
    }
  }, [data, error, existsUser, logOutUserState]);

  return {data, error, loading};
};

export default useUser;
