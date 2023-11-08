import ContentOverviewCard from "../components/ContentOverviewCard";
export default function Home({ userName = "Username" }) {
  return (
    <div>
      <div className="bg-BG_PRIMARY m-5 my-20 ">
        <h3>Hallo {userName}, willkommen zurück</h3>
        <p className="text-TEXT_GRAY">
          hier sind alle wichtigen Infos für dich zusammengestellt.{" "}
        </p>
        <ContentOverviewCard />
      </div>
    </div>
  );
}
