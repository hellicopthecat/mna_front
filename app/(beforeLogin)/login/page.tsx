"use client";
import AuthInput from "@/components/auth/authInput";
import AuthButton from "@/components/auth/authButton";
import NavigateBtn from "@/components/navigateBtn";
import {loginStore} from "@/store/loginStore";
import HorizontalSeperator from "@/components/horizonSeperator";
import {useFormState} from "react-dom";
import {loginAciton} from "./action";

// component
export default function LoginPage() {
  //state
  const {userNameMode, setUserName, setEmail} = loginStore();
  //form
  const [state, actionFn] = useFormState(loginAciton, null);
  return (
    <>
      <div className="flex justify-between font-bold bg-slate-500 rounded-full p-[2px] mb-4 ">
        <div
          onClick={setUserName}
          className={`${userNameMode ? "loginForm_true" : " loginForm_false"}`}
        >
          <h4>아이디 로그인</h4>
        </div>
        <div
          onClick={setEmail}
          className={`${userNameMode ? " loginForm_false" : " loginForm_true"}`}
        >
          <h4>이메일 로그인</h4>
        </div>
      </div>

      <form action={actionFn} className="flex flex-col gap-5 items-center">
        <legend hidden>로그인</legend>
        <AuthInput
          labelText={userNameMode ? "아이디" : "이메일"}
          inputName={userNameMode ? "username" : "email"}
          inputType={userNameMode ? "text" : "email"}
          placeholder={userNameMode ? "아이디" : "이메일"}
        />
        <AuthInput
          labelText="비밀번호"
          inputName="password"
          inputType="password"
          placeholder="비밀번호"
        />
        <AuthButton btnTxt="로그인" />
      </form>
      <HorizontalSeperator />
      <div className="flex flex-col gap-3">
        <NavigateBtn location="/join" linkTxt="회원가입" />
      </div>
      <HorizontalSeperator />
      <div className="flex flex-col">
        <NavigateBtn location="/join" linkTxt="google로 로그인" />
      </div>
    </>
  );
}
