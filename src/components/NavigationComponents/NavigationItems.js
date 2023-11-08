import { NavLink } from "react-router-dom";

import {
  BsFillHouseDoorFill,
  BsHouseDoor,
  BsPeople,
  BsPeopleFill,
} from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

export default function Navigation() {
  return (
    <div className="flex flex-col justify-between h-1/2 m-5">
      <ul className="list-none flex flex-col gap-5">
        <li className="flex relative ">
          <NavLink to="/">
            {({ isActive }) => (
              <>
                <div className="flex flex-row items-center">
                  <div className={isActive ? "" : "hidden"}>
                    <div className="bg-PURPLE_PRIMARY w-1 h-full absolute -left-5"></div>
                    <BsFillHouseDoorFill
                      className={`w-5 mr-3 text-PURPLE_PRIMARY `}
                      size={32}
                    />
                  </div>
                  <div className={isActive ? "hidden" : ""}>
                    <BsHouseDoor
                      className={`w-5 mr-3 text-TEXT_PRIMARY `}
                      size={32}
                    />
                  </div>
                  Übersicht
                </div>
              </>
            )}
          </NavLink>
        </li>
        <li className="flex relative ">
          <NavLink to="/groups">
            {({ isActive }) => (
              <>
                <div className="flex flex-row items-center">
                  <div className={isActive ? "" : "hidden"}>
                    <div className="bg-PURPLE_PRIMARY w-1 h-full absolute -left-5"></div>
                    <BsPeopleFill
                      className={`w-5 mr-3 text-PURPLE_PRIMARY `}
                      size={32}
                    />
                  </div>
                  <div className={isActive ? "hidden" : ""}>
                    <BsPeople
                      className={`w-5 mr-3 text-TEXT_PRIMARY `}
                      size={32}
                    />
                  </div>
                  Gruppen
                </div>
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <NavLink to="/login">
        <div className={`flex items-center text-TEXT_PRIMARY `}>
          <CiLogout className="w-5 mr-3 text-TEXT_PRIMARY" size={32} />
          Ausloggen
        </div>
      </NavLink>
      <hr className="border-gray-300" />
    </div>
  );
}
