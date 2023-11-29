import React from "react";

export default function GroupOverviewContent({ group, clamp, isDetailPage }) {
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
        {isDetailPage ? (
          <h1 className="line-clamp-2"> {group.name}</h1>
        ) : (
          <h4 className="line-clamp-1"> {group.name}</h4>
        )}

        <div
          className={`${
            isDetailPage ? "paragraph-lead" : "text-PURPLE_PRIMARY"
          } paragraph-md my-1`}
        >
          Wöchentlich, Dienstag 18:00 Uhr
        </div>

        {
          <p className={`${clamp ? "line-clamp-5" : ""} paragraph-lg`}>
            {group.description}
          </p>
        }
      </div>
    </div>
  );
}
