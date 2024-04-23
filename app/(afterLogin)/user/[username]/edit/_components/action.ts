"use server";

import {Mutation} from "@/lib/__generated__/graphql";
import {apollo} from "@/lib/client";
import {
  ApolloCache,
  DocumentNode,
  FetchResult,
  TypedDocumentNode,
  gql,
} from "@apollo/client";
import {redirect} from "next/navigation";
import isMe from "@/lib/isMe";

//mutaion gql
const EDIT_USER_MUTATION = gql`
  mutation editUser(
    $phone: String
    $avatar: String
    $lastName: String
    $firstName: String
    $password: String
  ) {
    editUser(
      phone: $phone
      avatar: $avatar
      lastName: $lastName
      firstName: $firstName
      password: $password
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
//type
interface IprevStates {
  errorMsg: undefined;
}
//action
const editUserMutation = async (prevState: IprevStates, formData: FormData) => {
  const {data: isMyIfo} = await isMe();
  const {id: userId, username} = isMyIfo.seeMyprofile;
  //formData
  const userData = {
    avatar: formData.get("avatar"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    password: formData.get("password"),
  };
  // editUserUpdate
  //   const editUserUpdate = (
  //     cache: ApolloCache<any>,
  //     result: Omit<FetchResult<Mutation>, "context">
  //   ) => {
  //     const {data} = result;
  //     const fragmentId = `User:${userId}`;
  //     if (data?.editUser.ok) {
  //       const a = cache.modify({
  //         id: fragmentId,
  //         fields: {
  //           seeMyprofile(prev) {
  //             console.log(prev);
  //             return [
  //               ...prev,
  //               {
  //                 avatar: userData.avatar,
  //                 firstName: userData.firstName,
  //                 lastName: userData.lastName,
  //                 phone: userData.phone,
  //               },
  //             ];
  //           },
  //         },
  //       });
  //       console.log(a);
  //     }
  //   };
  //mutate
  const {data} = await apollo.mutate({
    mutation: EDIT_USER_MUTATION,
    variables: {
      avatar: userData.avatar,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      password: userData.password === "" ? null : userData.password,
    },
    // update: editUserUpdate,
  });

  if (!data?.editUser.ok) {
    return {
      errorMsg: data?.editUser.errorMsg,
    };
  } else {
    redirect(`/user/${username}`);
  }
};

export default editUserMutation;
