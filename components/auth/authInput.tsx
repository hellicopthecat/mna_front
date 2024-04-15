import {FieldValues, UseFormRegister} from "react-hook-form";

interface IAuthFormType extends FieldValues {
  username?: string;
  email?: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
interface IAuthInput {
  register: UseFormRegister<IAuthFormType>;
  labelText: string;
  inputName: "username" | "email" | "password" | "firstName" | "lastName";
  inputType: string;
  placeholder: string;
}
const AuthInput = ({
  register,
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
        {...register(inputName)}
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
