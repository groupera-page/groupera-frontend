import React from "react";
import PageContainer from "../components/Globals/PageContainer";
import GroupSearchContainer from "../components/GroupSearch/GroupSearchContainer";
import GroupCardContainer from "../components/GroupSearch/GroupCardContainer";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";

export default function GroupsPage() {
  const mockData = useSelector((state) => state.mockData.mockData);
  const userGroupsId = [
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

  const userGroups = mockData.groups.filter((group) =>
    userGroupsId.includes(group.id)
  );

  return (
    <PageContainer title={`Gruppen`}>
      <div className="flex justify-between mt-4 lg:mt-10">
        <h2>Gruppen</h2>
        <Link to={`group/create`}>
          <PrimaryButton>
            <div className="flex flex-row gap-2 items-center">
              <GoPlus size={20} />
              <div>Gruppe gründen</div>
            </div>
          </PrimaryButton>
        </Link>
      </div>
      <GroupSearchContainer />
      <div className="flex flex-col gap-8">
        {searchedGroups.length > 0 ? (
          <GroupCardContainer groups={searchedGroups} />
        ) : (
          <div>
            <div className="flex flex-row items-center">
              <div>
                <GroupCardContainer
                  groups={mockData.NoGroupCard}
                  showNoGroupTitle={true}
                />
              </div>
            </div>
          </div>
        )}
        <GroupCardContainer
          title={"Deine Gruppen"}
          groups={userGroups}
          showGroupCount={false}
        />
      </div>
    </PageContainer>
  );
}
