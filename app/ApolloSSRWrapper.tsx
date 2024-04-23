"use client";

import {ApolloNextAppProvider} from "@apollo/experimental-nextjs-app-support/ssr";
import {ApolloLink, HttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import {getCookie} from "cookies-next";

const TOKEN = "TOKEN";
const cookieToken = getCookie(TOKEN);

export function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    fetchOptions: {next: {revalidate: 0}},
  });
  const authLink = setContext((_, {headers}) => {
    const token = cookieToken;
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
        ? ApolloLink.from([
            new SSRMultipartLink({stripDefer: true}),
            authLink,
            httpLink,
          ])
        : ApolloLink.from([authLink, httpLink]),
    connectToDevTools: true,
  });
}

export function ApolloWrapper({children}: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
