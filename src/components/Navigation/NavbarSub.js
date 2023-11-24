import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarSub({ subPages }) {
  console.log("");
  return (
    <div className="">
      <ul className="flex">
        {subPages.map((page) => (
          <li className="flex relative hover:shadow-md rounded-md " key={page}>
            <NavLink to={page.toLocaleLowerCase()}>
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
      </ul>
    </div>
  );
}
