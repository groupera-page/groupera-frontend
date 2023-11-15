import React from "react";
import GroupCard from "./GroupCard";
import { useSelector } from "react-redux";

export default function GroupCardContainer({ title }) {
  const mockData = useSelector((state) => state.mockData.mockData);
  const mockDataGroups = mockData.groups;
  const mockDataFilters = mockData.filters;

  const filteredGroups = mockDataFilters.length
    ? mockDataGroups.filter((group) => mockDataFilters.includes(group.theme))
    : mockDataGroups;

  return (
    <div>
      {filteredGroups.length > 0 ? <h4 className="my-2">{title}</h4> : null}
      <div className="grid lg:grid-cols-3 gap-4 ">
        {filteredGroups.map((group, index) => (
          <GroupCard key={index} text={group.description} title={group.name} />
        ))}
      </div>
    </div>
  );
}
