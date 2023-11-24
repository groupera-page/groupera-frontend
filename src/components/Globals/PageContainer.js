import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function PageContainer({ title, text, children }) {
  return (
    <div>
      <div className="bg-BG_PRIMARY lg:bg-BG_GRAY ">
        <div className="px-5 py-10 lg:py-20 lg:pl-48 lg:px-20 ">
          <div className="py-5">
            <div className="flex justify-between">
              {title === "Gruppen" ? <h2>{title}</h2> : <h6>{title}</h6>}
              {title === "Gruppen" && (
                <PrimaryButton>+ Gruppe Grunden</PrimaryButton>
              )}
            </div>
            <div className="paragraph-md">{text} </div>
          </div>
          <div
            className={`flex flex-col ${
              title === "Gruppen" ? "lg:flex-col" : "lg:flex-row"
            } gap-8`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
