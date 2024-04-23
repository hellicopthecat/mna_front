"use client";
import {usePathname, useRouter} from "next/navigation";
import {Suspense} from "react";

export default function HeaderComp({username}: {username: string}) {
  const router = useRouter();
  const path = usePathname();
  //hook

  //fn
  const title = () => {
    if (path.match("/home")) {
      return "HOME";
    } else if (path.match(`/user/${username}`)) {
      return username?.toUpperCase();
    } else if (path.match(`/company/createCompany`)) {
      return "회사 생성";
    }
  };
  const goback = () => {
    router.back();
  };

  const goUserPage = () => {
    router.push(`/user/${username}`);
  };

  return (
    <Suspense fallback={<div>Loading</div>}>
      <header className=" border-b-2 border-slate-400 w-full h-16 flex items-center">
        {path === "/home" ? null : (
          <svg
            onClick={goback}
            className=" cursor-pointer "
            fill="none"
            width={20}
            strokeWidth={4}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        )}
        <h1 className="font-bold text-center flex-1 ">{title()}</h1>
        <svg
          onClick={goUserPage}
          className=" cursor-pointer "
          fill="none"
          width={20}
          strokeWidth={2}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </header>
    </Suspense>
  );
}
