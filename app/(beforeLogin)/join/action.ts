"use server";

import {Mutation} from "@/lib/__generated__/graphql";
import {apollo} from "@/lib/client";
import {DocumentNode, gql} from "@apollo/client";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {redirect} from "next/navigation";

const CREATE_USER_MUTATION = gql`
  mutation Mutation(
    $username: String!
    $email: String!
    $password: String!
    $lastName: String
    $firstName: String
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      lastName: $lastName
      firstName: $firstName
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;

export const createAccoutAction = async (
  prevState: any,
  formdata: FormData
) => {
  const createUserData = {
    username: formdata.get("username"),
    email: formdata.get("email"),
    password: formdata.get("password"),
    lastName: formdata.get("lastName"),
    firstName: formdata.get("firstName"),
  };
  try {
    const {data} = await apollo.mutate({
      mutation: CREATE_USER_MUTATION,
      variables: {
        username: createUserData.username,
        email: createUserData.email,
        password: createUserData.password,
        lastName: createUserData.lastName,
        firstName: createUserData.firstName,
      },
    });
    const {ok, errorMsg} = data?.createUser as Mutation["createUser"];
    if (!ok) {
      console.log(errorMsg);
      return null;
    }
  } catch (e) {
    console.log(e);
  } finally {
    redirect("/");
  }
};
