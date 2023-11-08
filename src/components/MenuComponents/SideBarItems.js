import React, { useState } from "react";
import {
  BsFillHouseDoorFill,
  BsHouseDoor,
  BsPeople,
  BsPeopleFill,
} from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

export default function SideBarItems() {
  const [activePage, setActivePage] = useState("Übersicht");

  function handleSetActivePage(componentName) {
    setActivePage(componentName);
  }

  return (
    <div className="flex flex-col justify-between h-1/2 m-5">
      <ul className="list-none flex flex-col gap-5">
        <li className="flex flex-row relative ">
          {activePage === "Übersicht" && (
            <div className="bg-PURPLE_PRIMARY w-1 h-full absolute -left-5"></div>
          )}
          <div
            className={`flex items-center text-TEXT_PRIMARY }`}
            onClick={() => handleSetActivePage("Übersicht")}
          >
            {activePage === "Übersicht" && (
              <BsFillHouseDoorFill
                className={`w-5 mr-3 text-PURPLE_PRIMARY `}
                size={32}
              />
            )}
            {activePage !== "Übersicht" && (
              <BsHouseDoor className={`w-5 mr-3  `} size={32} />
            )}
            Übersicht
          </div>
        </li>
        <li className="flex flex-row relative ">
          {activePage === "Gruppen" && (
            <div className="bg-PURPLE_PRIMARY w-1 h-full absolute -left-5"></div>
          )}
          <div
            className={`flex items-center text-TEXT_PRIMARY `}
            onClick={() => handleSetActivePage("Gruppen")}
          >
            {activePage === "Gruppen" && (
              <BsPeopleFill
                className={`w-5 mr-3 text-PURPLE_PRIMARY `}
                size={32}
              />
            )}
            {activePage !== "Gruppen" && (
              <BsPeople className={`w-5 mr-3  `} size={32} />
            )}
            Gruppen
          </div>
        </li>
      </ul>

      <div
        className={`flex items-center text-TEXT_PRIMARY `}
        onClick={() => handleSetActivePage("Ausloggen")}
      >
        <CiLogout className="w-5 mr-3 text-TEXT_PRIMARY" size={32} />
        Ausloggen
      </div>
      <hr className="border-gray-300" />
    </div>
  );
}
