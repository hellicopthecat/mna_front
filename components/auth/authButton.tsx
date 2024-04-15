import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
} from "react";

interface IAuthButton {
  btnTxt: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
const AuthButton = ({btnTxt, handleClick}: IAuthButton) => {
  return (
    <button type="submit" className="btn_theme" onSubmit={handleClick}>
      {btnTxt}
    </button>
  );
};
export default AuthButton;
