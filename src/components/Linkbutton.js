import { NavLink as Link } from "react-router-dom";

export default function Linkbutton({ title, route, bgColor, textColor }) {
  return (
    <div>
      {" "}
      <Link to={route} className={`${bgColor} ${textColor} p-3 rounded`}>
        {title}
      </Link>
    </div>
  );
}
