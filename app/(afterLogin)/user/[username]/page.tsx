"use client";
import Container from "@/components/body/container";
import HorizontalSeperator from "@/components/horizonSeperator";
import {Query} from "@/lib/__generated__/graphql";
import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import Link from "next/link";
import {
  UserInfoContainer,
  UserInfoInnerText,
  UserInfoTitleText,
} from "./_components/userInfoContainer";

const SEE_MY_PROFILE_QUERY = gql`
  query SeeMyprofile {
    seeMyprofile {
      id
      createdAt
      updateAt
      username
      email
      phone
      firstName
      lastName
      avatar
    }
  }
` as DocumentNode | TypedDocumentNode<Query>;

export default function UserPage() {
  const {data, error} = useQuery(SEE_MY_PROFILE_QUERY);
  return (
    <Container>
      <UserInfoContainer>
        <div className="w-5 h-5 bg-blue-500 rounded-full" />
        <UserInfoInnerText
          username
          text={
            data?.seeMyprofile.username
              ? data?.seeMyprofile.username
              : "전화번호를 입력해주세요."
          }
        />
      </UserInfoContainer>

      <UserInfoContainer>
        <UserInfoTitleText text="E-mail" />
        <UserInfoInnerText
          text={
            data?.seeMyprofile.email
              ? data?.seeMyprofile.email
              : "프로필을 입력해주세요."
          }
        />
      </UserInfoContainer>

      <UserInfoContainer>
        <UserInfoTitleText text="휴대전화" />
        <UserInfoInnerText
          text={
            data?.seeMyprofile.phone
              ? data?.seeMyprofile.phone
              : "프로필을 입력해주세요."
          }
        />
      </UserInfoContainer>

      <UserInfoContainer>
        <UserInfoTitleText text="이름" />
        <div className="flex gap-1">
          <UserInfoInnerText
            text={
              data?.seeMyprofile.firstName ? data?.seeMyprofile.firstName : "성"
            }
          />
          <UserInfoInnerText
            text={
              data?.seeMyprofile.lastName ? data?.seeMyprofile.lastName : "이름"
            }
          />
        </div>
      </UserInfoContainer>

      <div className="flex flex-col items-center gap-3">
        <Link
          href={`/user/${data?.seeMyprofile.username}/edit`}
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
