import {ApolloLink, HttpLink, makeVar} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const TOKEN = "TOKEN";

export function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
  });
  const authLink = setContext((_, {headers}) => {
    const token = sessionStorage.getItem(TOKEN);
    return {
      headers: {
        ...headers,
        token,
      },
    };
  });
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([new SSRMultipartLink({stripDefer: true}), httpLink])
        : ApolloLink.from([authLink, httpLink]),
  });
}
