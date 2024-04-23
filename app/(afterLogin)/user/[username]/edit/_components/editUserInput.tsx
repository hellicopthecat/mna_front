interface IEditUserInput {
  inputName: "password" | "firstName" | "lastName" | "phone" | "avatar";
  inputText?: string;
}
const EditUserInput = ({inputName, inputText}: IEditUserInput) => {
  const labelMaker = (inputName: IEditUserInput["inputName"]) => {
    if (inputName === "password") {
      return "비밀번호";
    }
    if (inputName === "firstName") {
      return "이름 (성)";
    }
    if (inputName === "lastName") {
      return "이름";
    }
    if (inputName === "phone") {
      return "전화번호";
    }
  };
  const placeHolderMaker = (inputText?: string) => {
    if (!inputText && inputName === "password") {
      return "새로운 비밀번호를 입력해주세요";
    }
    if (!inputText && inputName === "firstName") {
      return "이름(성)을 입력해주세요";
    }
    if (!inputText && inputName === "lastName") {
      return "이름을 입력해주세요";
    }
    if (!inputText && inputName === "phone") {
      return "휴대전화번호를 입력해주세요";
    }
  };
  return (
    <div className="flex items-center">
      <label htmlFor={inputName} className="w-32 font-semibold">
        {labelMaker(inputName)}
      </label>
      <input
        className="px-5 py-2 rounded-lg shadow-md"
        id={inputName}
        name={inputName}
        type="text"
        placeholder={!inputText ? placeHolderMaker(inputText) : inputText}
        defaultValue={inputText}
      />
    </div>
  );
};

export default EditUserInput;
