import Linkbutton from "./Linkbutton";
import Navbutton from "./Navbutton";
// import About from "../pages/About";
export default function Navbar() {
  return (
    <div className="bg-neutral-100/50 flex justify-between items-center p-5 gap-2">
      <ul className="list-none flex gap-4">
        <li>
          <Navbutton title="Startseite"></Navbutton>
        </li>
        <li>
          <Navbutton title="Gruppen"></Navbutton>
        </li>
        <li>
          <Navbutton title="Blog"></Navbutton>
        </li>
        <li>
          <Navbutton title="Priceübersicht"></Navbutton>
        </li>
        <li>
          <Navbutton title="Über uns"></Navbutton>
        </li>
      </ul>{" "}
      <div>We.To</div>
      <ul className="list-none flex gap-4">
        <li>
          <Linkbutton title="Search Box"></Linkbutton>
        </li>
        <li>
          <Linkbutton title="Anmelden"></Linkbutton>
        </li>
        <li>
          <Linkbutton title="Mitglied Werden"></Linkbutton>
        </li>
      </ul>
    </div>
  );
}
