import React from "react";

export default function GroupOverviewContent({ group, clamp }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap justify-end">
          {group.members > 0 && (
            <p className="text-TEXT_LIGHTGRAY">
              {group.members === 1
                ? `${group.members} Mitglied`
                : `${group.members} Mitglieder`}
            </p>
          )}
        </div>
        <h4 className="mr-4 line-clamp-2 flex-wrap "> {group.name}</h4>
        <p className="text-PURPLE_PRIMARY">{group.meeting}</p>
        {
          <p className={`${clamp ? "line-clamp-5" : ""}`}>
            {group.description}
          </p>
        }
      </div>
    </div>
  );
}
