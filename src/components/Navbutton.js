import { NavLink as Link } from "react-router-dom";

export default function Navbutton({ title }) {
  return (
    <Link to="/About" className="navbar-left-nav-link">
      {title}
    </Link>
  );
}
