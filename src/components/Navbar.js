import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar({ handleMobileMenu }) {
  return (
    <div className=" bg-BG_GRAY flex justify-between items-center py-5 px-2 text-gray-600 w-full ">
      <div className="flex justify-center w-full">
        <img src={logoSvg} alt="logo" className="lg:w-40 w-28" />
      </div>
      <div className="absolute lg:hidden">
        <Hamburger
          label="Show menu"
          rounded
          size={24}
          onToggle={(toggled) => {
            if (toggled) {
              handleMobileMenu(true);
            } else {
              handleMobileMenu(false);
            }
          }}
          className="cursor-pointer lg:hidden"
        />
      </div>
    </div>
  );
}
