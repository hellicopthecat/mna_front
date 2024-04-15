import FooterCont from "@/components/body/footer";
import HeaderComp from "@/components/body/header";

export default function afterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-dvh justify-between">
      <HeaderComp />
      <div className="flex-1">{children}</div>
      <FooterCont />
    </div>
  );
}
