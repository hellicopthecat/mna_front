"use client";
import {Query} from "@/lib/__generated__/graphql";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useParams, useRouter} from "next/navigation";

import {useSuspenseQuery} from "@apollo/experimental-nextjs-app-support/ssr";
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
      }
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function ConnectingCompany() {
  const router = useRouter();
  const {id} = useParams();
  const {data, error} = useSuspenseQuery(CONNECT_COMPANY_QUERY, {});
  const connectingCompany = data?.seeMyprofile.ownCompany
    ?.filter((comapny) => comapny?.id === id)
    .map((company) => company?.connectingCompany);
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
      <div className="flex flex-col gap-3 w-full mx-20 bg-white p-5 rounded-md ">
        {connectingCompany?.map((company) =>
          company?.map((connecting) => (
            <div key={connecting?.id} className="flex items-center gap-3">
              <div className=" w-3 h-3 bg-blue-600 rounded-full" />
              <p className="text-xl font-semibold">{connecting?.companyName}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
