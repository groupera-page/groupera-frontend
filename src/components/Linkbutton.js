import { NavLink as Link } from "react-router-dom";

export default function Linkbutton({ title }) {
  return (
    <div>
      {" "}
      <Link to="/About" className="">
        {title}
      </Link>
    </div>
  );
}
