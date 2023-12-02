import OverviewGroups from "../components/Overview/OverviewGroups";
import OverviewNextEvent from "../components/Overview/OverviewNextEvent";
import PageContainer from "../components/Globals/PageContainer";
import { useSelector } from "react-redux";
export default function Home() {
  const mockData = useSelector((state) => state.mockData.mockData);
  const userGroupsId = [
    ...mockData.user[0].joinedGroups,
    ...mockData.user[0].moderatedGroups,
  ];
  const userGroups = mockData.groups.filter((group) =>
    userGroupsId.includes(group.id)
  );

  return (
    <PageContainer
      title={`Hallo ${mockData.user[0].alias}`}
      text={"hier sind alle wichtigen Infos für dich zusammengestellt."}
    >
      <OverviewGroups groups={userGroups} />
      <OverviewNextEvent groups={userGroups} />
    </PageContainer>
  );
}
