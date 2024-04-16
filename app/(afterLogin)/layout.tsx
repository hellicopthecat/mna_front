import FooterCont from "@/components/body/footer";
import HeaderComp from "@/components/body/header";

export default function afterLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-dvh justify-between relative">
      <HeaderComp />
      <div className="flex-1">{children}</div>
      {modal}
      <FooterCont />
    </div>
  );
}
