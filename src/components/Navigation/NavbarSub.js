import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavbarSub({ subPages }) {
  const { pathname } = useLocation();

  const isFirstPage =
    subPages.length > 0 &&
    !pathname.includes("termine") &&
    !pathname.includes("mitglieder") &&
    !pathname.includes("unterlagen");

  return (
    <div className="border-BORDER_PRIMARY border-b">
      <ul className="flex">
        {subPages.map((page, index) => (
          <li
            className="flex relative hover:shadow-md rounded-md paragraph-lead text-TEXT_GRAY"
            key={index}
          >
            <NavLink
              to={page.toLocaleLowerCase()}
              // isActive={() => pathname.includes(page.toLocaleLowerCase())}
            >
              <div className="flex flex-row items-center">
                <div
                  className={`p-2 rounded-t-md  
                    ${
                      pathname.includes(page.toLocaleLowerCase())
                        ? "bg-PURPLE_PRIMARY text-BG_PRIMARY"
                        : isFirstPage && index === 0
                        ? "bg-PURPLE_PRIMARY text-BG_PRIMARY"
                        : ""
                    }
                  `}
                >
                  <div>{page}</div>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
