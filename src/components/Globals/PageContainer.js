import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function PageContainer({ title, text, children }) {
  return (
    <div>
      <div className="bg-BG_PRIMARY lg:bg-BG_GRAY h-full">
        <div className="px-5 py-2 md:py-12 lg:py-28 lg:pl-48 lg:px-20 ">
          <div>
            <div className="flex justify-between">
              {title === "Gruppen" ? <h2>{title}</h2> : <h6>{title}</h6>}
              {title === "Gruppen" && (
                <Link to={`group/create`}>
                  <PrimaryButton>
                    <div className="flex flex-row gap-2 items-center">
                      <GoPlus size={20} />
                      <div>Gruppe Gründen</div>
                    </div>
                  </PrimaryButton>
                </Link>
              )}
            </div>
            <div className="paragraph-md hidden lg:block">{text} </div>
          </div>
          <div
            className={`flex flex-col ${
              title === "Gruppen" ? "lg:flex-col" : "lg:flex-row"
            } gap-2`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}