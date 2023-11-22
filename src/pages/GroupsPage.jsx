import React from "react";
import PageContainer from "../components/PageContainer";
import GroupSearchContainer from "../components/GroupSearch/GroupSearchContainer";
import GroupCardContainer from "../components/GroupSearch/GroupCardContainer";
import { useSelector } from "react-redux";

export default function GroupsPage() {
  const mockData = useSelector((state) => state.mockData.mockData);
  const userGroupsID = [
    ...mockData.user[0].joinedGroups,
    ...mockData.user[0].moderatedGroups,
  ];

  const filteredGroups = mockData.filters.length
    ? mockData.groups.filter((group) => mockData.filters.includes(group.topic))
    : mockData.groups;

  const searchedGroups = mockData.groupSearch
    ? filteredGroups.filter((group) =>
        group.name.toLowerCase().includes(mockData.groupSearch.toLowerCase())
      )
    : filteredGroups;

  const myGroups = mockData.groups.filter((group) =>
    userGroupsID.includes(group.id)
  );

  return (
    <PageContainer title={`Gruppen`}>
      <GroupSearchContainer />

      {searchedGroups.length > 0 ? (
        <GroupCardContainer groups={searchedGroups} />
      ) : (
        <div>
          <div className="flex flex-row gap- items-center">
            <div>
              <GroupCardContainer groups={mockData.NoGroupCard} />
            </div>
          </div>
        </div>
      )}
      <GroupCardContainer title={"Deine Gruppen"} groups={myGroups} />
    </PageContainer>
  );
}
