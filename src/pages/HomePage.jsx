import OverviewGroups from "../components/Overview/OverviewGroups";
import OverviewNextEvent from "../components/Overview/OverviewNextEvent";
import PageContainer from "../components/PageContainer";
import { useSelector } from "react-redux";
export default function Home({ userName = "Username" }) {
  const mockData = useSelector((state) => state.mockData.mockData);

  return (
    <PageContainer
      title={`Hallo ${userName}`}
      text={"hier sind alle wichtigen Infos für dich zusammengestellt."}
    >
      <OverviewGroups mockData={mockData} />
      <OverviewNextEvent mockData={mockData} />
    </PageContainer>
  );
}
