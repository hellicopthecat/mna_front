"use client";

import useUser from "@/hooks/useUser";
import {usePathname, useRouter} from "next/navigation";

export default function HeaderComp() {
  const router = useRouter();
  const path = usePathname();
  //hook
  const {data} = useUser();
  //fn
  const title = () => {
    if (path.match("/home")) {
      return "HOME";
    } else if (path.match(`/user/${data?.seeMyprofile.id}`)) {
      return data?.seeMyprofile.username.toUpperCase();
    }
  };
  const goback = () => {
    router.back();
  };
  const goUserPage = () => {
    router.push(`/user/${data?.seeMyprofile.id}`);
  };

  return (
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
  );
}
