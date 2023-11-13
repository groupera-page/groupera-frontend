import OverviewGroups from "../components/OverviewCards/OverviewGroups";
import OverviewNextEvent from "../components/OverviewCards/OverviewNextEvent";
import PageContainer from "../components/PageContainer";
import { useSelector } from "react-redux";
export default function Home({ userName = "Username" }) {
  const mockData = useSelector((state) => {
    return state.mockData.mockData;
  });

  const mockDataRedux = mockData;
  // Replace this
  // const mockData2 = {
  //   groups: [
  //     {
  //       name: "Depression",
  //       nextEventTime: "2023-11-15T18:00:00",
  //     },
  //     {
  //       name: "Angst",
  //       nextEventTime: "2023-11-20T15:30:00",
  //     },
  //   ],
  // };
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
