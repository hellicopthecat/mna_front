import {ReactNode} from "react";

export function UserInfoContainer({children}: {children: ReactNode}) {
  return (
    <div className="flex items-center gap-2 border-b-2 border-slate-300 p-5">
      {children}
    </div>
  );
}
export function UserInfoTitleText({text}: {text: string}) {
  return <p className="font-bold text-lg w-24">{text}</p>;
}
export function UserInfoInnerText({
  text,
  username,
}: {
  text: string;
  username?: boolean;
}) {
  return (
    <p className={`${username ? "font-bold text-3xl" : "font-semibold"} `}>
      {text}
    </p>
  );
}
