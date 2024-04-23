import {FieldValues, UseFormRegister} from "react-hook-form";

interface IAuthFormType extends FieldValues {
  username?: string;
  email?: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
interface IAuthInput {
  labelText: string;
  inputName: "username" | "email" | "password" | "firstName" | "lastName";
  inputType: string;
  placeholder: string;
}
const AuthInput = ({
  labelText,
  inputName,
  inputType,
  placeholder,
}: IAuthInput) => {
  return (
    <>
      <label htmlFor={inputName} hidden>
        {labelText}
      </label>
      <input
        className="bg-slate-50 border-b-2 px-6 py-2 rounded-full"
        id={inputName}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
      />
    </>
  );
};
export default AuthInput;
