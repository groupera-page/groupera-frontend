import React from "react";
import GroupPreviewCard from "./GroupPreviewCard";

export default function GroupCardContainer({
  title,
  groups,
  showGroupCount,
  showNoGroupTitle,
}) {
  return (
    <div>
      <div
        className={`paragrap-lg font-bold ${
          showNoGroupTitle ? "opacity-100" : "opacity-0 "
        }`}
      >
        {`0 Gruppen gefunden`}
      </div>

      {showGroupCount && groups.length > 0 && (
        <div className="paragrap-lg font-bold">
          {" "}
          {`${groups.length} ${
            groups.length === 1 ? "Gruppe" : "Gruppen"
          } gefunde`}
        </div>
      )}
      {groups.length > 0 ? <h4 className="my-2">{title}</h4> : null}
      <div className="grid lg:grid-cols-3 gap-8 my-2">
        {groups.map((group, index) => (
          <GroupPreviewCard key={index} group={group} />
        ))}
      </div>
    </div>
  );
}
