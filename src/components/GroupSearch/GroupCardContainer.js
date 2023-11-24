import React from "react";
import GroupPreviewCard from "./GroupPreviewCard";

export default function GroupCardContainer({ title, groups }) {
  return (
    <div>
      {groups.length > 0 ? <h4 className="my-2">{title}</h4> : null}
      <div className="grid lg:grid-cols-3 gap-5 my-2 md:px-20 lg:px-0">
        {groups.map((group, index) => (
          <GroupPreviewCard key={index} group={group} />
        ))}
      </div>
    </div>
  );
}
