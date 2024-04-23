import Container from "@/components/body/container";
import isMe from "@/lib/isMe";
import EditUserForm from "./_components/editUserForm";
import {Suspense} from "react";

export default async function UserEdit() {
  const {data: user} = await isMe();
  return (
    <Suspense fallback={<div>loading</div>}>
      <Container>
        <div className="flex items-center gap-3 border-b-2 border-slate-300 pb-3">
          <div className="w-5 h-5 bg-blue-400 rounded-full" />
          <p className="font-bold text-2xl">{user?.seeMyprofile.username}</p>
        </div>
        <EditUserForm
          firstName={user?.seeMyprofile.firstName!}
          lastName={user?.seeMyprofile.lastName!}
          phone={user?.seeMyprofile.phone!}
          avatar={user?.seeMyprofile.avatar!}
        />
      </Container>
    </Suspense>
  );
}
