import logoSvg from "../../assets/imgLogos/logoNoBg.svg";
import { Squash as Hamburger } from "hamburger-react";
import MenuDropDown from "./Menus/MenuDropDown";

export default function Navbar({ handleMenuMobile, openMenuMobile }) {
  return (
    <div className="bg-BG_GRAY lg:bg-BG_PRIMARY flex justify-between items-center lg:fixed  text-gray-600 w-full shadow-md">
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
      <div className="flex items-center justify-end mr-2 w-1/3 lg:w-1/4">
        <MenuDropDown openMenuMobile={openMenuMobile} />
      </div>
    </div>
  );
}
