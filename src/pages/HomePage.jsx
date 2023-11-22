import OverviewGroups from "../components/Overview/OverviewGroups";
import OverviewNextEvent from "../components/Overview/OverviewNextEvent";
import PageContainer from "../components/PageContainer";
import { useSelector } from "react-redux";
export default function Home() {
  const mockData = useSelector((state) => state.mockData.mockData);

  // const myGroups = mockData.groups.filter(
  //   (group) =>
  //   mockData.user.includes(group.id) ||
  //    // mockDataUserModeratedGroups.includes(group.id)
  // );

  return (
    <PageContainer
      title={`Hallo ${mockData.user[0].alias}`}
      text={"hier sind alle wichtigen Infos für dich zusammengestellt."}
    >
      <OverviewGroups
        mockData={mockData}
        groups={mockData.groups}
        user={mockData.user[0]}
      />
      <OverviewNextEvent mockData={mockData} />
    </PageContainer>
  );
}
