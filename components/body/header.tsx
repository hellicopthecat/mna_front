"use client";

import {usePathname} from "next/navigation";

export default function HeaderComp() {
  const path = usePathname();
  const title = path.match("/") && "HOME";
  return (
    <header className=" bg-slate-500 h-16 flex justify-center items-center">
      <h1 className="text-white text-center ">{title}</h1>
    </header>
  );
}
