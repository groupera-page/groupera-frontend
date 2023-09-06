import { NavLink as Link } from "react-router-dom";

export default function NavlinkItem({ onClick, title, route }) {
  return (
    <li onClick={onClick} className="md:my-0 mb-7 md:text-base text-lg">
      <Link to={route} className="hover:text-primarybutton">
        {title}
      </Link>
    </li>
  );
}
