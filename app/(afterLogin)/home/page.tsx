"use client";

import {Query} from "@/lib/__generated__/graphql";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import CompanyCard from "./_components/CompanyCard";
import {Suspense} from "react";
import Link from "next/link";

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
        connectedCompanyCount
        connectingCompanyCount
      }
      manageCompanyCount
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function Home() {
  const {loading, data, error, fetchMore} = useQuery(MAIN_PAGE_MY_DATA);
  const isMe = data?.seeMyprofile;
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="flex flex-col h-full p-5 gap-5">
      <div className="flex items-end gap-3">
        <p className="font-bold text-xl">반갑습니다.</p>
        <Link href={`/user/${isMe?.id}`}>
          <p className="font-semibold">{isMe?.username}님</p>
        </Link>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">보유 회사</h2>
        <Suspense fallback={loading}>
          <div className="flex flex-col gap-2">
            <p className=" font-semibold mb-1">
              {isMe?.hasCompanyCount}개의 회사를 보유하고 계십니다..
            </p>
            <div className=" grid grid-cols-3 overflow-y-scroll">
              {isMe?.ownCompany?.map((company) =>
                company ? (
                  <CompanyCard key={company?.id} company={company} />
                ) : null
              )}
            </div>
          </div>
        </Suspense>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">관리 회사</h2>
        <Suspense fallback={loading}>
          <div className="flex flex-col gap-2">
            <p className=" font-semibold mb-1">
              {isMe?.manageCompanyCount}개의 회사를 관리하고 계십니다..
            </p>
            <div className=" grid grid-cols-3 overflow-y-scroll">
              {isMe?.manageCompany?.map((company) =>
                company ? (
                  <CompanyCard key={company?.id} company={company} />
                ) : null
              )}
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
