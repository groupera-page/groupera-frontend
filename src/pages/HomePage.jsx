import OverviewGroups from "../components/Overview/OverviewGroups";
import OverviewNextEvent from "../components/Overview/OverviewNextEvent";
import PageContainer from "../components/PageContainer";
import { useSelector } from "react-redux";
export default function Home({ userName = "Username" }) {
  const mockData = useSelector((state) => {
    return state.mockData.mockData;
  });

  const mockDataRedux = mockData;

  return (
    <PageContainer
      title={`Hallo ${userName}, willkommen zurück`}
      text={"hier sind alle wichtigen Infos für dich zusammengestellt."}
    >
      <OverviewGroups mockData={mockDataRedux} />
      <OverviewNextEvent mockData={mockDataRedux} />
    </PageContainer>
  );
}
