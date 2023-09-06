import { NavLink as Link } from "react-router-dom";

export default function Navbutton({ title, route }) {
  return <Link to={route}>{title}</Link>;
}
