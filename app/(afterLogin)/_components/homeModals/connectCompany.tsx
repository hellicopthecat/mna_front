"use client";
import {Query} from "@/lib/__generated__/graphql";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useParams, useRouter} from "next/navigation";
import {Suspense} from "react";

const CONNECT_COMPANY_QUERY = gql`
  query Query {
    seeMyprofile {
      ownCompany {
        id
        connectingCompany {
          companyName
          companyLogo
          id
          updateAt
          createdAt
        }
        connectedCompany {
          companyName
          companyLogo
          id
          updateAt
          createdAt
        }
      }
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function ConnectedCompany() {
  const router = useRouter();
  const {id} = useParams();
  const {data, error, loading} = useQuery(CONNECT_COMPANY_QUERY, {});
  const connectCompany = data?.seeMyprofile.ownCompany
    ?.filter((comapny) => comapny?.id === id)
    .map((company) => company?.connectedCompany);
  // fn
  const goHome = () => {
    router.replace("/home");
    router.refresh();
  };
  return (
    <div
      onClick={goHome}
      className="flex justify-center items-center absolute z-50 w-full h-dvh top-0 left-0 bg-black bg-opacity-75 cursor-pointer"
    >
      <Suspense fallback={loading}>
        <div className="flex flex-col gap-3 w-full mx-20 bg-white p-5 rounded-md ">
          {connectCompany?.map((company) =>
            company?.map((connected) => (
              <div key={connected?.id} className="flex items-center gap-3">
                <div className=" w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-xl font-semibold">
                  {connected?.companyName}
                </p>
              </div>
            ))
          )}
        </div>
      </Suspense>
    </div>
  );
}