"use server";

import {Mutation} from "@/lib/__generated__/graphql";

import {apollo} from "@/lib/client";
import {DocumentNode, TypedDocumentNode, gql} from "@apollo/client";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

//gql
const LOGIN_MUTATION = gql`
  mutation LoginUser($username: String, $email: String, $password: String!) {
    loginUser(username: $username, email: $email, password: $password) {
      token
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;

// actionFN && Mutation
export const loginAciton = async (prevData: any, formData: FormData) => {
  const cookie = cookies();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email) {
    const {data} = await apollo.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        username,
        password,
      },
    });
    const {ok, token, errorMsg} = data?.loginUser as Mutation["loginUser"];
    if (!ok) {
      console.log("home", errorMsg);
      return null;
    }
    if (ok) {
      cookie.set("TOKEN", token + "");
      redirect("/home");
    }
  }
  if (!username) {
    const {data} = await apollo.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        email,
        password,
      },
    });
    const {ok, token, errorMsg} = data?.loginUser as Mutation["loginUser"];
    if (!ok) {
      console.log("home", errorMsg);
      return null;
    }
    if (ok) {
      cookie.set("TOKEN", token + "");
      redirect("/home");
    }
  }
};
