"use client";
import AuthButton from "@/components/auth/authButton";
import AuthInput from "@/components/auth/authInput";
import HorizontalSeperator from "@/components/horizonSeperator";
import {useFormState} from "react-dom";
import {createAccoutAction} from "./action";
import NavigateBtn from "@/components/navigateBtn";

export default function JoinPage() {
  //form
  const [state, actionFn] = useFormState(createAccoutAction, null);
  return (
    <>
      <form action={actionFn} className="flex flex-col gap-5 items-center">
        <legend hidden>login</legend>
        <AuthInput
          labelText="아이디"
          inputName="username"
          inputType="text"
          placeholder="아이디"
        />
        <AuthInput
          labelText="이메일"
          inputName="email"
          inputType="email"
          placeholder="이메일"
        />
        <AuthInput
          labelText="비밀번호"
          inputName="password"
          inputType="password"
          placeholder="비밀번호"
        />
        <AuthInput
          labelText="성"
          inputName="firstName"
          inputType="text"
          placeholder="성"
        />
        <AuthInput
          labelText="이름"
          inputName="lastName"
          inputType="text"
          placeholder="이름"
        />
        <AuthButton btnTxt="가입하기" />
      </form>
      <NavigateBtn location="/" linkTxt="취소" />
      <HorizontalSeperator />
      <div className="flex flex-col">
        <AuthButton btnTxt="google로 로그인하기" />
      </div>
    </>
  );
}
