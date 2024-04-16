"use client";

import {usePathname} from "next/navigation";

export default function HeaderComp() {
  const path = usePathname();
  const title = path.match("/") && "HOME";
  return (
    <header className=" border-b-2 border-slate-400 h-16 flex justify-center items-center">
      <h1 className="font-bold text-center ">{title}</h1>
    </header>
  );
}
