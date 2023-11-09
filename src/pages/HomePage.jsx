import OverViewGroups from "../components/OverViewCards/OverViewGroups";
import OverViewEvents from "../components/OverViewCards/OverViewEvents";
export default function Home({ userName = "Username" }) {
  return (
    <div>
      <div className="bg-BG_PRIMARY  ">
        <div className=" p-5 py-20 ">
          <h3 className="">Hallo {userName}, willkommen zurück</h3>
          <p className="text-TEXT_GRAY">
            hier sind alle wichtigen Infos für dich zusammengestellt.{" "}
          </p>
          <OverViewGroups />
          <OverViewEvents />
        </div>
      </div>
    </div>
  );
}
