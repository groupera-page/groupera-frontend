import React from "react";
import { BsCheckLg } from "react-icons/bs";

const MySimpleSelect = ({ input, label, type, meta: { touched, error } }) => {
  console.log(error);
  return (
    <label
      htmlFor={`opt-${input.name}`}
      className={"flex gap-4 relative cursor-pointer"}
    >
      <input
        {...input}
        type={type}
        id={`opt-${input.name}`}
        name={input.name}
        className={
          "mx-1 absolute h-5 w-5 appearance-none bg-BG_GRAY checked:bg-PURPLE_PRIMARY rounded-sm border border-BORDER_PRIMARY checked:border-PURPLE_PRIMARY"
        }
      />
      <BsCheckLg
        className={`absolute ml-1 rounded-md text-BG_GRAY`}
        size={20}
      />
      {input.name === "terms" ? (
        <div
          className={`pl-8 ${touched && error ? "text-PURPLE_PRIMARY" : ""}`}
        >
          Ich akzeptiere die{" "}
          <a
            style={{ color: "revert", textDecoration: "revert" }}
            href="https://www.iubenda.com/nutzungsbedingungen/60686844"
            target="_blank"
            rel="noreferrer"
          >
            Allgemeinen Geschäftsbedingungen
          </a>{" "}
          und die{" "}
          <a
            style={{ color: "revert", textDecoration: "revert" }}
            href="https://www.iubenda.com/privacy-policy/60686844"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerkärung
          </a>{" "}
          von Groupera
        </div>
      ) : (
        <div
          className={`pl-8 ${touched && error ? "text-PURPLE_PRIMARY" : ""}`}
        >
          {label}
        </div>
      )}
    </label>
  );
};

export default MySimpleSelect;
