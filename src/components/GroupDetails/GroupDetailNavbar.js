import React from "react";
import { NavLink } from "react-router-dom";

export default function GroupDetailNavbar() {
  const subPages = ["Termine", "Pinnwand", "MitgliederInnen", "Unterlagen"];
  return (
    <div className="lg:w-1/2">
      <ul className="flex justify-between">
        {subPages.map((page) => (
          <li className="flex relative" key={page}>
            <NavLink to={page}>
              {({ isActive }) => (
                <div className="flex flex-row items-center ">
                  <div
                    className={`p-2 rounded-t-md font-light
                    ${isActive ? "bg-PURPLE_PRIMARY text-BG_PRIMARY" : ""}`}
                  >
                    {page}
                  </div>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}
