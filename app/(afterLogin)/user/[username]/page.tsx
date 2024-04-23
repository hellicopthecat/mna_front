import Container from "@/components/body/container";
import Link from "next/link";
import {
  UserInfoContainer,
  UserInfoInnerText,
  UserInfoTitleText,
} from "./_components/userInfoContainer";
import {Suspense} from "react";
import isMe, {myProfileCache} from "@/lib/isMe";
import {revalidatePath, revalidateTag} from "next/cache";

export default async function UserPage() {
  const {
    data: {seeMyprofile},
    loading,
  } = await myProfileCache();

  const {username, firstName, lastName, email, phone} = seeMyprofile;
  const revalidateBtn = async () => {
    "use server";
    revalidateTag("isMyCache");
  };

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Container>
      <form action={revalidateBtn}>
        <button type="submit">revalidate</button>
      </form>
      <UserInfoContainer>
        <div className="w-5 h-5 bg-blue-500 rounded-full" />
        <Suspense fallback={<div>loading</div>}>
          <UserInfoInnerText username text={username + ""} />
        </Suspense>
      </UserInfoContainer>
      <UserInfoContainer>
        <UserInfoTitleText text="이름(성)" />
        <UserInfoInnerText text={firstName ?? "이름(성)"} />
      </UserInfoContainer>
      <UserInfoContainer>
        <UserInfoTitleText text="이름" />
        <UserInfoInnerText text={lastName ?? "이름"} />
      </UserInfoContainer>
      <UserInfoContainer>
        <UserInfoTitleText text="E-mail" />
        <UserInfoInnerText text={email ?? "이메일을 입력해주세요"} />
      </UserInfoContainer>

      <UserInfoContainer>
        <UserInfoTitleText text="휴대전화" />
        <UserInfoInnerText text={phone ?? "전화번호를 입력해주세요."} />
      </UserInfoContainer>

      <div className="flex flex-col items-center gap-3">
        <Link
          href={`/user/${username}/edit`}
          className="bg-blue-500 text-center w-36 p-2 rounded-md shadow-md text-white"
        >
          회원정보 변경하기
        </Link>
        <Link
          href={`/company/createCompany`}
          className="bg-blue-500 text-center w-36 p-2 rounded-md shadow-md text-white"
        >
          회사생성하기
        </Link>
      </div>
    </Container>
  );
}
