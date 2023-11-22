import React from "react";

export default function GroupOverviewContent({ group, clamp }) {
  return (
    <div>
      <div className="flex flex-col gap-2 flex-1 ">
        <div className="flex flex-row flex-wrap justify-between items-end">
          <h4 className="mr-4"> {group.name}</h4>
          {group.members > 0 && (
            <p className="text-TEXT_LIGHTGRAY">
              {group.members === 1
                ? `${group.members} Mitglied`
                : `${group.members} Mitglieder`}
            </p>
          )}
        </div>

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
