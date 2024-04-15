import Link from "next/link";
interface INavigateBtn {
  location: string;
  linkTxt: string;
}
const NavigateBtn = ({location, linkTxt}: INavigateBtn) => {
  return (
    <Link href={location} className="btn_theme">
      {linkTxt}
    </Link>
  );
};
export default NavigateBtn;
