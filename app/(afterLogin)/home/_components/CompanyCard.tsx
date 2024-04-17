"use client";
import Link from "next/link";

interface IOwnCompanyMainPage {
  id: string;
  isManager: boolean;
  isOwned: boolean;
  companyName: string;
  connectedCompanyCount: number;
  connectingCompanyCount: number;
}
export default function CompanyCard({company}: {company: IOwnCompanyMainPage}) {
  return (
    <div
      key={company?.id}
      className="flex flex-col gap-3 bg-gray-50 border-2 p-5 rounded-md shadow-md "
    >
      <div className="flex gap-2 ">
        {company?.isOwned && (
          <span className={`badge ${company?.isOwned && "bg-red-400"}`}>
            OWNER
          </span>
        )}
        {company?.isManager && (
          <span className={`badge ${company?.isManager && "bg-red-200"}`}>
            MANAGER
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-400 rounded-full" />
          <h3 className="font-bold">
            {company?.companyName.length > 10
              ? `${company.companyName.substring(0, 10)}...`
              : company.companyName}
          </h3>
        </div>
        <div className="flex  gap-4 font-semibold text-sm text-center">
          <Link href={`/home/connected/${company.id}`}>
            거래처 {company?.connectedCompanyCount}
          </Link>
          <Link href={`/home/connecting/${company.id}`}>
            발주자 {company?.connectingCompanyCount}
          </Link>
        </div>
      </div>
    </div>
  );
}
