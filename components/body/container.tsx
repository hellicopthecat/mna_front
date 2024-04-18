import {ReactNode} from "react";

export default function Container({children}: {children: ReactNode}) {
  return <div className="flex flex-col  h-full p-5 gap-5">{children}</div>;
}
