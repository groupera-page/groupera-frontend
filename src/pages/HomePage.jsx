import OverviewGroups from "../components/OverviewCards/OverviewGroups";
import OverviewNextEvent from "../components/OverviewCards/OverviewNextEvent";
export default function Home({ userName = "Username" }) {
  // Replace this
  const mockData = {
    groups: [
      {
        name: "Depression",
        nextEventTime: "2023-11-15T18:00:00",
      },
      {
        name: "Angst",
        nextEventTime: "2023-11-20T15:30:00",
      },
    ],
  };

  return (
    <div>
      <div className="bg-BG_PRIMARY lg:bg-BG_GRAY lg:pl-48 lg:mt-10">
        <div className=" p-5 py-10 lg:p-10">
          <div className="py-5">
            <h3 className="">Hallo {userName}, willkommen zurück</h3>
            <p className="text-TEXT_GRAY ">
              hier sind alle wichtigen Infos für dich zusammengestellt.{" "}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12    ">
            <OverviewGroups mockData={mockData} />
            <OverviewNextEvent mockData={mockData} />
          </div>
        </div>
      </div>
    </div>
  );
}
