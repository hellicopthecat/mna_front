"use server";

import {Mutation} from "@/lib/__generated__/graphql";
import {getClient} from "@/lib/client";
import {gql} from "@apollo/client";

import {redirect} from "next/navigation";

const CREATE_COMPANY_MUTAION = gql`
  mutation createCompany($companyName: String!) {
    createCompany(companyName: $companyName) {
      ok
      errorMsg
    }
  }
`;
export const createCompany = async (prevState: any, formData: FormData) => {
  const apollo = getClient();
  const companyName = formData.get("companyName");
  try {
    const {data} = await apollo.mutate({
      mutation: CREATE_COMPANY_MUTAION,
      variables: {
        companyName,
      },
    });
    const {ok, errorMsg} = data as Mutation["createCompany"];
    if (!ok) {
    }
  } catch (e) {
    return console.log(e);
  } finally {
    //   redirect("/home");
  }
};
