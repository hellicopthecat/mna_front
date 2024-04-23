import {Query} from "@/lib/__generated__/graphql";
import {DocumentNode, TypedDocumentNode, gql} from "@apollo/client";
import Link from "next/link";
import CompanyCard from "./_components/CompanyCard";
import Container from "@/components/body/container";
import {Suspense} from "react";
import {apollo} from "@/lib/client";

const MAIN_PAGE_MY_DATA = gql`
  query seeMyprofile {
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

export default async function Home() {
  const {data, error} = await apollo.query({query: MAIN_PAGE_MY_DATA});
  const {
    username,
    hasCompanyCount,
    ownCompany,
    manageCompany,
    manageCompanyCount,
  } = data.seeMyprofile;

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Container>
        <div className="flex items-end gap-3">
          <p className="font-bold text-xl">반갑습니다.</p>
          <Link href={`/user/${username}`}>
            <p className="font-semibold">{username}님</p>
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">보유 회사</h2>
          <div className="flex flex-col gap-2">
            <p className=" font-semibold mb-1">
              {hasCompanyCount}개의 회사를 보유하고 계십니다..
            </p>
            <div className="flex overflow-x-scroll overflow-scroll pb-2">
              {ownCompany?.map((company, index) =>
                company ? (
                  <CompanyCard key={company?.id} company={company} />
                ) : (
                  <div key={index}>nothing</div>
                )
              )}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">관리 회사</h2>

          <div className="flex flex-col gap-2">
            <p className=" font-semibold mb-1">
              {manageCompanyCount}개의 회사를 관리하고 계십니다..
            </p>
            <div className=" flex overflow-x-scroll pb-2">
              {manageCompany?.map((company, index) =>
                company ? (
                  <CompanyCard key={company?.id} company={company} />
                ) : (
                  <div key={index}>nothing</div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
