"use client";

import {Query} from "@/lib/__generated__/graphql";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import OwnCompany from "./_components/ownCompany";
import {Suspense} from "react";

const MAIN_PAGE_MY_DATA = gql`
  query Query {
    seeMyprofile {
      id
      createdAt
      updateAt
      username
      ownCompany {
        id
        isManager
        isOwned
        companyName
        connectedCompanyCount
        connectingCompanyCount
      }
      hasCompanyCount
      manageCompany {
        id
        createdAt
        updateAt
        companyName
        isManager
        isOwned
      }
      manageCompanyCount
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function Home() {
  const {loading, data, error} = useQuery(MAIN_PAGE_MY_DATA);
  const isMe = data?.seeMyprofile;
  if (error) {
    return <div>error</div>;
  }
  return (
    <div className="flex flex-col gap-5  h-full p-5">
      <div className="flex items-end gap-3">
        <p className="font-bold text-xl">반갑습니다.</p>
        <p className="font-semibold">{isMe?.username}님</p>
      </div>
      {!loading && (
        <div className="flex flex-col gap-2">
          <p className=" font-semibold mb-1">
            {isMe?.hasCompanyCount}개의 회사를 보유하고 계십니다..
          </p>
          {isMe?.ownCompany?.map((company) =>
            company ? <OwnCompany key={company?.id} company={company} /> : null
          )}
        </div>
      )}
    </div>
  );
}
