import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

export default function ErrorField({ errorText }) {
  return (
    <div className="flex px-4 gap-2 items-right bg-BG_PRIMARY text-PURPLE_PRIMARY border border-PURPLE_PRIMARY rounded-md p-1 my-1">
      <div>
        <AiOutlineWarning size={26} />
      </div>
      {errorText}
    </div>
  );
}
