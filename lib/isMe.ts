import {Query} from "@/lib/__generated__/graphql";
import {apollo} from "@/lib/client";
import {DocumentNode, TypedDocumentNode, gql} from "@apollo/client";
const IS_ME = gql`
  query seeMyprofile {
    seeMyprofile {
      id
      createdAt
      updateAt
      username
      email
      phone
      firstName
      lastName
      avatar
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;
import {unstable_cache as nextCache, revalidatePath} from "next/cache";

const isMe = async () => {
  console.log("hit");
  const {data, error, loading} = await apollo.query({
    query: IS_ME,
    context: {next: {revalidate: 0}},
  });
  return {data, error, loading};
};

export const myProfileCache = nextCache(isMe, ["isMyCache"], {
  tags: ["isMyCache"],
});

export default isMe;
