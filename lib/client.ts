import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {registerApolloClient} from "@apollo/experimental-nextjs-app-support/rsc";

import {cookies} from "next/headers";

const TOKEN = "TOKEN";

const {getClient} = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    fetchOptions: {next: {revalidate: 0}},
  });
  const authLink = setContext((_, {headers}) => {
    const token = cookies().get(TOKEN)?.value;
    return {
      headers: {
        ...headers,
        token,
      },
    };
  });
  return new ApolloClient({
    cache: new InMemoryCache({}),
    link: ApolloLink.from([authLink, httpLink]),
    connectToDevTools: true,
  });
});
export const apollo = getClient();
