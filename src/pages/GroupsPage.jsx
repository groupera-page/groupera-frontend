import React from "react";
import PageContainer from "../components/PageContainer";
import GroupSearchContainer from "../components/GroupSearch/GroupSearchContainer";
import GroupCardContainer from "../components/GroupSearch/GroupCardContainer";
import { useSelector } from "react-redux";

export default function GroupsPage() {
  const mockData = useSelector((state) => state.mockData.mockData);
  const mockDataUserJoinedGroups = mockData.user[0].joinedGroups;
  const mockDataUserModeratedGroups = mockData.user[0].moderatedGroups;
  const mockDataGroups = mockData.groups;
  const mockDataFilters = mockData.filters;
  const mockDataSearchedGroup = mockData.groupSearch;

  const filteredGroups = mockDataFilters.length
    ? mockDataGroups.filter((group) => mockDataFilters.includes(group.topic))
    : mockDataGroups;

  const searchedGroups = mockDataSearchedGroup
    ? filteredGroups.filter((group) =>
        group.name.toLowerCase().includes(mockDataSearchedGroup.toLowerCase())
      )
    : filteredGroups;

  const myGroups = mockDataGroups.filter(
    (group) =>
      mockDataUserJoinedGroups.includes(group.id) ||
      mockDataUserModeratedGroups.includes(group.id)
  );

  return (
    <PageContainer title={`Gruppen`}>
      <GroupSearchContainer />
      <GroupCardContainer groups={searchedGroups} />
      <GroupCardContainer title={"Deine Gruppen"} groups={myGroups} />
    </PageContainer>
  );
}
