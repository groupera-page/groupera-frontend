import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavbarSub({ subPages }) {
  const { pathname } = useLocation();

  return (
    <div className=" border-BORDER_PRIMARY border-b">
      <ul className="flex">
        {subPages.map((page, index) => (
          <li
            className="flex relative hover:shadow-md rounded-md paragraph-lead text-TEXT_GRAY"
            key={index}
          >
            <NavLink to={page.toLocaleLowerCase()}>
              {({ isActive }) => (
                <div className="flex flex-row items-center">
                  {/* GROUP ID IS SET TO 123 BUT GET THE REAL SLUG LATER FROM REDUX */}
                  <div
                    className={`p-2 rounded-t-md 
                    
                      ${
                        (pathname === `/groups/123` && index === 0) || isActive
                          ? "bg-PURPLE_PRIMARY text-BG_PRIMARY"
                          : ""
                      }
                    `}
                  >
                    <div>{page}</div>
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
