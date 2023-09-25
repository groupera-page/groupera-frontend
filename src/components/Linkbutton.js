import { NavLink } from "react-router-dom";

export default function Linkbutton({ title, route, buttonType }) {
  let textColor, hoverTextColor, bgColor, hoverBoxShadow, border;

  if (buttonType === "primary") {
    textColor = "text-slate-100";
    hoverTextColor = "hover:text-white";
    bgColor = "bg-primarypurple";
    hoverBoxShadow = "";
    border = "";
  } else if (buttonType === "secondary") {
    textColor = "text-gray-600";
    hoverTextColor = "hover:text-gray-700";
    bgColor = "bg-primaryblue";
    hoverBoxShadow = "";
    border =
      "border border-rounded-md border-primaryBg hover:border-primaryblue";
  } else {
    textColor = "text-gray-700";
    hoverTextColor = "hover:text-primarypurple";
    bgColor = "";
    hoverBoxShadow = "";
    border = "";
  }

  return (
    <div>
      {" "}
      <NavLink
        to={route}
        className={`${bgColor} ${textColor} ${hoverTextColor} ${hoverBoxShadow} ${border} p-3 rounded-md whitespace-nowrap transition-color duration-300 ease-in-out lg:text-base text-1xl `}
      >
        {title}
      </NavLink>
    </div>
  );
}
