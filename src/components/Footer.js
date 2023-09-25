import NavlinkItem from "./NavlinkItem";

import logoSvg from "../assets/imgLogos/logoNoBg2.svg";

export default function Footer() {
  return (
    <div className="bg-primaryBg">
      <hr className="border-t border-gray-300 pb-12 " />
      <div className="flex justify-between items-center px-5 lg:px-60 md:px-32 text-gray-700 w-full pb-10 ">
        <img src={logoSvg} alt="logo" className="md:h-20 h-14" loading="lazy" />
        <ul>
          <li className="font-medium text-xl mb-2 text-primaryText">
            Rechtliches
          </li>
          <li>
            <NavlinkItem title="Über Uns" route="/about" />
            <NavlinkItem title="Impressum" route="/impressum" />
            <NavlinkItem title="Datenschutz" route="/privacy" />
            <NavlinkItem title="AGB" route="/agb" />
            <NavlinkItem title="Wiederufsrecht" route="/rights" />
          </li>
        </ul>
      </div>
    </div>
  );
}
