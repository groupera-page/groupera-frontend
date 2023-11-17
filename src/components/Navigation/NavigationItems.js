import { NavLink } from "react-router-dom";
import HoverUnderline from "../Effects/HoverUnderline";

import {
  BsFillHouseDoorFill,
  BsHouseDoor,
  BsPeople,
  BsPeopleFill,
} from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

export default function Navigation({ handleMenuMobile }) {
  return (
    <div className="flex flex-col justify-between h-1/2 lg:h-5/6 m-5 ">
      <ul className="list-none flex flex-col gap-5 ">
        <li className="flex relative ">
          <li className="flex relative">
            <li className="flex relative group">
              <NavLink to="/" onClick={() => handleMenuMobile()}>
                {({ isActive }) => (
                  <>
                    <div className="flex flex-row items-center relative">
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
                      <div className="relative group">
                        Übersicht
                        <div className={`${!isActive ? "" : "hidden"} `}>
                          <HoverUnderline />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </NavLink>
            </li>
          </li>
        </li>
        <li className="flex relative">
          <NavLink to="/groups" onClick={() => handleMenuMobile()}>
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
                  <div className="relative group">
                    Gruppen
                    <div className={`${!isActive ? "" : "hidden"} `}>
                      <HoverUnderline />
                    </div>
                  </div>
                </div>
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <NavLink to="/login" onClick={() => handleMenuMobile()}>
        <div className={`flex items-center text-TEXT_PRIMARY `}>
          <CiLogout className="w-5 mr-3 text-TEXT_PRIMARY" size={32} />
          <div className="relative group">
            Ausloggen
            <HoverUnderline />
          </div>
        </div>
      </NavLink>
      <hr className="border-gray-300 lg:hidden mt-2" />
    </div>
  );
}
