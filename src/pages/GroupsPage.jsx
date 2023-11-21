import React from "react";
import PageContainer from "../components/PageContainer";
import GroupSearchContainer from "../components/GroupSearch/GroupSearchContainer";
import GroupCardContainer from "../components/GroupSearch/GroupCardContainer";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { useSelector } from "react-redux";
import GroupPreviewCard from "../components/GroupSearch/GroupPreviewCard";

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

  const NoGroupCard = [
    {
      name: "Starte eine neue Gruppe",
      meeting: "Nach deinen zeitlichen Vorlieben",
      topic: "",
      description:
        "Aktuell gibt es für dieses wichtige Thema keine Gruppe. Sei der erste und verbinde Menschen. Du musst kein Experte sein. Wir helfen dir bei der Moderation",
      id: "",
      members: 0,
      image:
        "Grouptitel%20pictures%20low_res/pexels-johannes-plenio-1690355_bj811s_e6dajb.jpg",
      users: [""],
    },
  ];

  return (
    <PageContainer title={`Gruppen`}>
      <GroupSearchContainer />

      {searchedGroups.length > 0 ? (
        <GroupCardContainer groups={searchedGroups} />
      ) : (
        <div>
          <div className="flex flex-row gap- items-center">
            <div>
              <GroupCardContainer groups={NoGroupCard} />
            </div>
          </div>
        </div>
      )}
      <GroupCardContainer title={"Deine Gruppen"} groups={myGroups} />
    </PageContainer>
  );
}
