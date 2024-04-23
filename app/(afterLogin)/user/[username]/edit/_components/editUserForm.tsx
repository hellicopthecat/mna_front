"use client";

import EditUserInput from "./editUserInput";
import {useFormState, useFormStatus} from "react-dom";
import editUserMutation from "./action";

interface IEditUserCompProps {
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
}

const initialState = {
  errorMsg: undefined,
};
export default function EditUserForm({
  firstName,
  lastName,
  phone,
  avatar,
}: IEditUserCompProps) {
  //@ts-ignore
  const [state, actionFn] = useFormState(editUserMutation, initialState);
  const {pending} = useFormStatus();

  return (
    <div className="flex flex-col items-center gap-5">
      <form action={actionFn} className="flex flex-col gap-3 items-center mb-5">
        <legend hidden>내 정보 편집</legend>
        <EditUserInput inputName="firstName" inputText={firstName} />
        <EditUserInput inputName="lastName" inputText={lastName} />
        <EditUserInput inputName="phone" inputText={phone} />
        <EditUserInput inputName="password" />
        <button
          type="submit"
          className=" bg-blue-500 text-white w-52 py-2 rounded-lg shadow-lg"
          disabled={pending}
        >
          확인
        </button>
      </form>
    </div>
  );
}
