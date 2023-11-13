import React from "react";
import PrimaryButton from "./Buttons/PrimaryButton";

export default function PageContainer({ title, text, children }) {
  return (
    <div>
      <div className="bg-BG_PRIMARY lg:bg-BG_GRAY lg:pl-48 lg:mt-10">
        <div className=" p-5 py-10 lg:p-10">
          <div className="py-5">
            <div className="flex justify-between">
              <h3 className="">{title}</h3>
              {title === "Gruppen" && (
                <PrimaryButton>+ Gruppe Grunden</PrimaryButton>
              )}
            </div>
            <p className="text-TEXT_GRAY ">{text} </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">{children}</div>
        </div>
      </div>
    </div>
  );
}
