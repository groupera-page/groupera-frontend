import React from "react";
import GroupPreviewCard from "./GroupPreviewCard";
import { useSelector } from "react-redux";

export default function GroupCardContainer({ title }) {
  const mockData = useSelector((state) => state.mockData.mockData);
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
  return (
    <div>
      {searchedGroups.length > 0 ? <h4 className="my-2">{title}</h4> : null}
      <div className="grid lg:grid-cols-3 gap-4 ">
        {searchedGroups.map((group, index) => (
          <GroupPreviewCard key={index} group={group} />
        ))}
      </div>
    </div>
  );
}
