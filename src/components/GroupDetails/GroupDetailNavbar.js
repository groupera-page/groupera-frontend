import React from "react";
import { NavLink } from "react-router-dom";

export default function GroupDetailNavbar() {
  const subPages = ["Termine", "MitgliederInnen", "Unterlagen"];
  return (
    <div className="lg:w-1/2">
      <ul className="flex gap-4">
        {subPages.map((page) => (
          <li className="flex relative hover:shadow-md" key={page}>
            <NavLink to={page}>
              {({ isActive }) => (
                <div className="flex flex-row items-center ">
                  <div
                    className={`p-2 rounded-t-md font-light
                    ${isActive ? "bg-PURPLE_PRIMARY text-BG_PRIMARY" : ""}`}
                  >
                    <div className="">{page}</div>
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
