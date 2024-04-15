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
  const {data, error} = useQuery<Query>(IS_ME, {skip: !existsUser});

  useEffect(() => {
    if (existsUser === false) {
      logOutUserState();
      logoutCookie();
    }
  }, [data, error]);
  useEffect(() => {}, [existsUser]);
  return {data};
};

export default useUser;
