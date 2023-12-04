import {NavLink, useNavigate} from "react-router-dom";
import HoverUnderline from "../Effects/HoverUnderline";

import {
  BsFillHouseDoorFill,
  BsHouseDoor,
  BsPeople,
  BsPeopleFill,
} from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import {useDispatch} from "react-redux";
import {logout} from "../../features/auth/authSlice";

export default function Navigation({ handleMenuMobile }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);

  const handleLogout = async () => {
    try {
      const response = await dispatch(logout())

      if (response.error) throw Error(response.error.message)

      handleMenuMobile()
      navigate("/auth/login")
    } catch (e) {
      // handle the error response
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col justify-between h-1/2 lg:h-full mx-5 lg:pb-20">
      <ul className="list-none flex flex-col gap-5 ">
        <li className="flex relative ">
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
                  <div className="relative group text-lg">
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
                  <div className="relative group text-lg">
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
      <div className={`flex items-center text-TEXT_PRIMARY `} onClick={() => handleLogout()}>
        <CiLogout className="w-5 mr-3 text-TEXT_PRIMARY" size={32} />
        <div className="relative group text-lg">
          Ausloggen
          <HoverUnderline />
        </div>
      </div>
      <hr className="border-gray-300 lg:hidden mt-2" />
    </div>
  );
}
