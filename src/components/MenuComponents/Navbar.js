import logoSvg from "../../assets/imgLogos/logoNoBg.svg";
import { Squash as Hamburger } from "hamburger-react";
import { AiOutlineDown } from "react-icons/ai";

export default function Navbar({ handleMobileMenu }) {
  return (
    <div className=" bg-BG_GRAY flex justify-between items-center px-2 py-1 lg:py-5 text-gray-600 w-full ">
      <div className="lg:hidden">
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
      <div className="flex justify-center w-full">
        <img src={logoSvg} alt="logo" className="lg:w-32 w-20" />
      </div>
      <div class="border-l border-gray-300 h-8 mr-4 "></div>

      <div>Username</div>
      <AiOutlineDown className={`w-5 mx-3 text-TEXT_PRIMARY `} size={32} />
    </div>
  );
}
