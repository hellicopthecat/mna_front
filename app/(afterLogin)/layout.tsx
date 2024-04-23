import FooterCont from "@/components/body/footer";
import HeaderComp from "@/components/body/header";
import isMe from "@/lib/isMe";

export default async function AfterLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const {data} = await isMe();
  const {username} = data.seeMyprofile;
  return (
    <div className="flex flex-col h-dvh justify-between relative">
      <HeaderComp username={username} />
      <div className="flex-1">{children}</div>
      {modal}
      <FooterCont />
    </div>
  );
}
