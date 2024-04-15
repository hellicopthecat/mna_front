"use client";
import AuthButton from "@/components/auth/authButton";
import AuthInput from "@/components/auth/authInput";
import HorizontalSeperator from "@/components/horizonSeperator";
import {Mutation, ResultResponse} from "@/lib/__generated__/graphql";
import {
  DocumentNode,
  TypedDocumentNode,
  useMutation,
  gql,
} from "@apollo/client";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
type CreateAccountType = {
  username?: string;
  email?: string;
  password: string;
  firstName?: string;
  lastName?: string;
  result?: string;
};
const CREATE_USER_MUTATION = gql(`
  mutation Mutation($username: String!, $email: String!, $password: String!, $lastName: String, $firstName: String) {
  createUser(username: $username, email: $email, password: $password, lastName: $lastName, firstName: $firstName) {
    ok
    errorMsg
  }
}
`) as DocumentNode | TypedDocumentNode<ResultResponse>;
export default function JoinPage() {
  //constants
  const router = useRouter();

  // form
  const {register, handleSubmit, getValues, setError, clearErrors} =
    useForm<CreateAccountType>({
      defaultValues: {
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        result: "",
      },
    });

  //graphql
  const onCompleted = (data: any) => {
    const {
      createUser: {ok, errorMsg},
    } = data as Mutation;
    if (!ok) {
      setError("result", {message: errorMsg + ""});
      return;
    }
    if (ok) {
      alert("가입이 완료되었습니다.");
      router.push("/");
    }
  };
  const [createUser, {loading, error}] = useMutation(CREATE_USER_MUTATION, {
    onCompleted,
  });

  //fn
  const onSubmit = async () => {
    const {username, email, password, firstName, lastName} = getValues();
    if (loading) {
      return;
    }
    await createUser({
      variables: {
        username,
        email,
        password,
        firstName,
        lastName,
      },
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 items-center"
      >
        <legend hidden>login</legend>
        <AuthInput
          register={register}
          labelText="아이디"
          inputName="username"
          inputType="text"
          placeholder="아이디"
        />
        <AuthInput
          register={register}
          labelText="이메일"
          inputName="email"
          inputType="email"
          placeholder="이메일"
        />
        <AuthInput
          register={register}
          labelText="비밀번호"
          inputName="password"
          inputType="password"
          placeholder="비밀번호"
        />
        <AuthInput
          register={register}
          labelText="성"
          inputName="firstName"
          inputType="text"
          placeholder="성"
        />
        <AuthInput
          register={register}
          labelText="이름"
          inputName="lastName"
          inputType="text"
          placeholder="이름"
        />
        <AuthButton btnTxt="가입하기" handleClick={handleSubmit(onSubmit)} />
      </form>
      <HorizontalSeperator />
      <div className="flex flex-col">
        <AuthButton btnTxt="google로 로그인하기" />
      </div>
    </>
  );
}
