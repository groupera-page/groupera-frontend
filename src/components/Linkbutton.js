import { NavLink as Link } from "react-router-dom";

export default function Linkbutton({ title, route, bgColor, textColor }) {
  const hoverText = textColor === "text-white" ? "black" : "primarybutton";
  //console.log(hoverText);
  return (
    <div>
      {" "}
      <Link
        to={route}
        className={`${bgColor} ${textColor} p-3 rounded whitespace-nowrap hover:text-${hoverText}`}
      >
        {title}
      </Link>
    </div>
  );
}
