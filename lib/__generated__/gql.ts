/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment OWN_COMPANY_FRAGMENT on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    companyOwner {\n      id\n      createdAt\n      updateAt\n      username\n      avatar\n      email\n      firstName\n      lastName\n    }\n    companyAdress {\n      id\n      createdAt\n      updateAt\n      country\n      city\n      streetAdress\n      restAdress\n      adressNum\n    }\n    companyManager {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      avatar\n    }\n    connectingCompanyCount\n    connectingCompany {\n      companyName\n      companyLogo\n      id\n      updateAt\n      createdAt\n    }\n    connectedCompanyCount\n    connectedCompany {\n      companyName\n      companyLogo\n      id\n      updateAt\n      createdAt\n    }\n    companyProduct {\n      id\n      itemName\n      itemPhoto\n      itemProductId\n      itemModelName\n      itemCount\n      createdAt\n      updateAt\n    }\n    companyInNout {\n      id\n      updateAt\n      createdAt\n      totalAssets\n      expendModel {\n        id\n        createdAt\n        updateAt\n        incomeTrue\n        infoSubtitle\n        money\n        paymentType\n        paymentsDone\n      }\n      expendMoney\n      incomeModel {\n        id\n        createdAt\n        updateAt\n        incomeTrue\n        infoSubtitle\n        money\n        paymentType\n        paymentsDone\n      }\n      incomeMoney\n    }\n  }\n": types.Own_Company_FragmentFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment OWN_COMPANY_FRAGMENT on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    companyOwner {\n      id\n      createdAt\n      updateAt\n      username\n      avatar\n      email\n      firstName\n      lastName\n    }\n    companyAdress {\n      id\n      createdAt\n      updateAt\n      country\n      city\n      streetAdress\n      restAdress\n      adressNum\n    }\n    companyManager {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      avatar\n    }\n    connectingCompanyCount\n    connectingCompany {\n      companyName\n      companyLogo\n      id\n      updateAt\n      createdAt\n    }\n    connectedCompanyCount\n    connectedCompany {\n      companyName\n      companyLogo\n      id\n      updateAt\n      createdAt\n    }\n    companyProduct {\n      id\n      itemName\n      itemPhoto\n      itemProductId\n      itemModelName\n      itemCount\n      createdAt\n      updateAt\n    }\n    companyInNout {\n      id\n      updateAt\n      createdAt\n      totalAssets\n      expendModel {\n        id\n        createdAt\n        updateAt\n        incomeTrue\n        infoSubtitle\n        money\n        paymentType\n        paymentsDone\n      }\n      expendMoney\n      incomeModel {\n        id\n        createdAt\n        updateAt\n        incomeTrue\n        infoSubtitle\n        money\n        paymentType\n        paymentsDone\n      }\n      incomeMoney\n    }\n  }\n"): (typeof documents)["\n  fragment OWN_COMPANY_FRAGMENT on Company {\n    id\n    createdAt\n    updateAt\n    companyLogo\n    companyName\n    isManager\n    isOwned\n    companyOwner {\n      id\n      createdAt\n      updateAt\n      username\n      avatar\n      email\n      firstName\n      lastName\n    }\n    companyAdress {\n      id\n      createdAt\n      updateAt\n      country\n      city\n      streetAdress\n      restAdress\n      adressNum\n    }\n    companyManager {\n      id\n      createdAt\n      updateAt\n      username\n      email\n      firstName\n      lastName\n      avatar\n    }\n    connectingCompanyCount\n    connectingCompany {\n      companyName\n      companyLogo\n      id\n      updateAt\n      createdAt\n    }\n    connectedCompanyCount\n    connectedCompany {\n      companyName\n      companyLogo\n      id\n      updateAt\n      createdAt\n    }\n    companyProduct {\n      id\n      itemName\n      itemPhoto\n      itemProductId\n      itemModelName\n      itemCount\n      createdAt\n      updateAt\n    }\n    companyInNout {\n      id\n      updateAt\n      createdAt\n      totalAssets\n      expendModel {\n        id\n        createdAt\n        updateAt\n        incomeTrue\n        infoSubtitle\n        money\n        paymentType\n        paymentsDone\n      }\n      expendMoney\n      incomeModel {\n        id\n        createdAt\n        updateAt\n        incomeTrue\n        infoSubtitle\n        money\n        paymentType\n        paymentsDone\n      }\n      incomeMoney\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;