"use client";

import {useFormState} from "react-dom";
import {createCompany} from "./action";

export default function CreateCompanyPage() {
  const [state, actionFn] = useFormState(createCompany, null);
  return (
    <div>
      <form action={actionFn}>
        <input name="companyName" type="text" />
        <button type="submit" className="btn_theme bg-blue-300">
          확인
        </button>
      </form>
    </div>
  );
}
