import { NavLink as Link } from "react-router-dom";

export default function NavlinkItem({ onClick, title, route }) {
  return (
    <li
      onClick={onClick}
      className="md:my-0 mb-7 lg:text-base md:text-xs text-lg"
    >
      <Link to={route} className="hover:text-primarybutton whitespace-nowrap">
        {title}
      </Link>
    </li>
  );
}
