import React from "react";
import GroupPreviewCard from "./GroupPreviewCard";

const GroupCardContainer = ({
  groups,
  showGroupCount = true,
}) => {
  return (
    <div>
      {showGroupCount && (
        <div className="paragraph-lg font-bold opacity-100">
          {
            groups.length === 0 ?
              '0 Gruppen gefunden'
              :
              `${groups.length} ${groups.length === 1 ? "Gruppe" : "Gruppen"} gefunden`
          }
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8 my-2 md:px-20 lg:px-0">
        {groups.map((group, index) => (
          <GroupPreviewCard key={index} group={group} />
        ))}
      </div>
    </div>
  );
}

export default GroupCardContainer
