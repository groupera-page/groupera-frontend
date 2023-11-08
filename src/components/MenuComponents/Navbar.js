import logoSvg from "../../assets/imgLogos/logoNoBg.svg";
import { Squash as Hamburger } from "hamburger-react";
import { AiOutlineDown } from "react-icons/ai";

export default function Navbar({ handleMenuMobile }) {
  return (
    <div className=" bg-BG_GRAY flex justify-between items-center px-2 py-1 lg:py-5 text-gray-600 w-full ">
      <div className="w-1/3">
        <div className="lg:hidden ">
          <Hamburger
            label="Show menu"
            rounded
            size={24}
            onToggle={(toggled) => {
              if (toggled) {
                handleMenuMobile(true);
              } else {
                handleMenuMobile(false);
              }
            }}
            className="cursor-pointer lg:hidden"
          />
        </div>
      </div>
      <div className="flex justify-center w-1/3 ">
        <img src={logoSvg} alt="logo" className="lg:w-32 w-20" />
      </div>
      <div className="flex items-center justify-end mr-2  w-1/3 lg:w-1/4">
        <div className=" border-l border-gray-300 h-8  "></div>
        <div className="text-xs mx-2 ">Username</div>
        <AiOutlineDown className={` text-TEXT_PRIMARY `} size={15} />
      </div>
    </div>
  );
}
