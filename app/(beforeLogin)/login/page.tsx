"use client";
import AuthInput from "@/components/auth/authInput";
import AuthButton from "@/components/auth/authButton";
import NavigateBtn from "@/components/navigateBtn";
import {existsTokenStore, loginStore} from "@/store/loginStore";
import HorizontalSeperator from "@/components/horizonSeperator";
import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {LoginResultResponse, Mutation} from "@/lib/__generated__/graphql";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {cookies} from "next/headers";
import {setCookie} from "./action";

// type
type LoginType = {
  username?: string;
  email?: string;
  password: string;
  result?: string;
};

//gql
const LOGIN_MUTATION = gql(`
    mutation LoginUser($username: String!, $password: String!) {
      loginUser(username: $username, password: $password) {
        token
        ok
        errorMsg
      }
    }
  `) as DocumentNode | TypedDocumentNode<LoginResultResponse>;

// component
export default function LoginPage() {
  //constants
  const router = useRouter();
  //state
  const {userNameMode, setUserName, setEmail} = loginStore();
  const {existsUser, loginUserState} = existsTokenStore();

  //form
  const {register, handleSubmit, getValues, setError} = useForm<LoginType>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      result: "",
    },
  });

  //mutation
  const onCompleted = (data: any) => {
    const {
      loginUser: {ok, errorMsg, token},
    } = data as Mutation;
    if (!ok) {
      setError("result", {message: errorMsg + ""});
    }
    if (token) {
      loginUserState(token);
      setCookie(token);
    }
  };
  const [loginUser, {loading, error}] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let loginResult;
    if (loading) {
      return;
    }
    const {username, email, password} = getValues();
    if (username) {
      loginResult = await loginUser({
        variables: {
          username,
          password,
        },
      });
    }
    if (email) {
      loginResult = await loginUser({
        variables: {
          email,
          password,
        },
      });
    }

    if (!loginResult?.data?.token) {
      return;
    }
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 items-center"
      >
        <legend hidden>login</legend>
        <AuthInput
          register={register}
          labelText={userNameMode ? "아이디" : "이메일"}
          inputName={userNameMode ? "username" : "email"}
          inputType={userNameMode ? "text" : "email"}
          placeholder={userNameMode ? "아이디" : "이메일"}
        />
        <AuthInput
          register={register}
          labelText="비밀번호"
          inputName="password"
          inputType="password"
          placeholder="비밀번호"
        />
        <AuthButton btnTxt="로그인" handleClick={handleSubmit(onSubmit)} />
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
