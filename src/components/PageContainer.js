import React from "react";
import PrimaryButton from "./Buttons/PrimaryButton";

export default function PageContainer({ title, text, children }) {
  return (
    <div>
      <div className="bg-BG_PRIMARY lg:bg-BG_GRAY ">
        <div className="px-5 lg:py-10 lg:px-48 lg:mt-10">
          <div className="py-5">
            <div className="flex justify-between">
              {title === "Gruppen" ? (
                <h1 className="font-light lg:font-medium lg:text-3xl">
                  {title}
                </h1>
              ) : (
                <h1>{title}</h1>
              )}
              {title === "Gruppen" && (
                <PrimaryButton>+ Gruppe Grunden</PrimaryButton>
              )}
            </div>
            <p className="text-TEXT_GRAY md:text-base">{text} </p>
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
