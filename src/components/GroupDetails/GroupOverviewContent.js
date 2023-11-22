import React from "react";

export default function GroupOverviewContent({
  name,
  members,
  description,
  meeting,
}) {
  return (
    <div>
      <div className="flex flex-col gap-2 flex-1 ">
        <div className="flex flex-row flex-wrap justify-between items-end">
          <h4 className="mr-4"> {name}</h4>
          {members > 0 && (
            <p className="text-TEXT_LIGHTGRAY">
              {members === 1 ? `${members} Mitglied` : `${members} Mitglieder`}
            </p>
          )}
        </div>

        <p className="text-PURPLE_PRIMARY">{meeting}</p>
        <p className="line-clamp-5">{description}</p>
      </div>
    </div>
  );
}
