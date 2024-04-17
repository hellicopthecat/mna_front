"use client";
import FooterCont from "@/components/body/footer";
import HeaderComp from "@/components/body/header";
import useUser from "@/hooks/useUser";

export default function AfterLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const {data, loading} = useUser();
  return data ? (
    <div className="flex flex-col h-dvh justify-between relative">
      <HeaderComp />
      <div className="flex-1">{children}</div>
      {modal}
      <FooterCont />
    </div>
  ) : (
    <div>로그아웃되셨습니다.</div>
  );
}
