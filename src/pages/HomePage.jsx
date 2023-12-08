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
    <PageContainer>
      <div className="w-full h-full lg:pr-20 ">
        <div className="flex flex-col mt-14 lg:mt-11 ">
          <h6>{`Hallo ${mockData.user[0].alias}`}</h6>
          <div className="paragraph-md hidden lg:block">
            hier sind alle wichtigen Infos für dich zusammengestellt.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-11">
          <div className="order-first lg:order-last lg:w-1/2 ">
            <OverviewNextEvent groups={userGroups} />
          </div>

          <div className="order-last lg:order-first lg:w-1/2">
            <OverviewGroups groups={userGroups} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
