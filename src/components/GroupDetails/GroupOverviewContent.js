import React from "react";

export default function GroupOverviewContent({ group, clamp, isDetailPage }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-2">
        <div className="w-3/4 break-words ">
          {isDetailPage ? (
            <h1 className="line-clamp-2 text-lg">{group.name}</h1>
          ) : (
            <h4 className="line-clamp-2 text-lg">{group.name}</h4>
          )}
        </div>
        <div className="flex justify-end whitespace-nowrap">
          {group.members && group.members.length > 0 && (
            <p className="text-TEXT_LIGHTGRAY flex">
              {`${group.members.length} ${group.members.length === 1 ? "Mitglied" : "Mitglieder"}`}
            </p>
          )}
        </div>
      </div>
      <div
        className={`${
          isDetailPage ? "paragraph-lead" : "text-PURPLE_PRIMARY"
        } paragraph-md my-1`}
      >
        Wöchentlich, Dienstag 18:00 Uhr {/*// todo switch with actual next event*/}
      </div>

      <p className={`${clamp ? "line-clamp-5" : ""} paragraph-lg`}>
        {group.description}
      </p>
    </div>
  );
}
