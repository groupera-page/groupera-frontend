import logoSvg from "../../assets/imgLogos/logoNoBg.svg";
import { Squash as Hamburger } from "hamburger-react";
import MenuDropDown from "./Menus/MenuDropDown";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar({ handleMenuMobile, openMenuMobile }) {
  const mockData = useSelector((state) => state.mockData.mockData);
  const userName = mockData.user[0].alias;

  const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  const truncatedUserName = truncateString(userName, 20);

  return (
    <div className="bg-BG_GRAY lg:bg-BG_PRIMARY flex justify-between items-center lg:fixed  text-gray-600 w-full shadow-md z-10">
      <div className="w-1/4">
        <div className="lg:hidden ">
          <Hamburger
            label="Show menu"
            rounded
            size={24}
            toggled={openMenuMobile}
            toggle={handleMenuMobile}
            className="cursor-pointer lg:hidden"
          />
        </div>
      </div>
      <div className="flex justify-center w-1/3 lg:hidden">
        <img src={logoSvg} alt="logo" className="lg:w-32 w-20" />
      </div>

      <div className="flex items-center justify-end mr-2 lg:mr-14 w-1/3 lg:w-1/4 z-20 h-16 ">
        {!openMenuMobile && (
          <div className="border-l border-gray-300 h-8 mx-2 "></div>
        )}
        <MenuDropDown openMenuMobile={openMenuMobile} title={truncatedUserName}>
          <NavLink to={`/profile/${"user"}/profil`}>
            <li className="p-2 hover:shadow-md flex justify-center whitespace-nowrap paragraph-lg">
              Profil bearbeiten
            </li>
          </NavLink>
          <>{/* <hr className="border-t border-gray-300" /> */}</>
          {/* NOT IN MVP! */}
          {/* <NavLink to="/">
            <li className="p-4 hover:shadow-md">Einstellungen</li>
          </NavLink>
          <>
            <hr className="border-t border-gray-300" />
          </>
          <NavLink to="/">
            <li className="p-4 whitespace-nowrap hover:shadow-md">
              Abo & Zahlungen
            </li>
          </NavLink> */}
        </MenuDropDown>
      </div>
    </div>
  );
}
