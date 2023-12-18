import React from "react";
import getFormattedDate from "../../util/formatMeetingDate";

export default function GroupOverviewContent({ group, clamp, isDetailPage }) {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-between mt-2">
        <div className="w-3/4 break-words ">
          {isDetailPage ? (
            <h1 className="line-clamp-4">{group.name}</h1>
          ) : (
            <h4 className="line-clamp-2">{group.name}</h4>
          )}
        </div>
        <div className="flex justify-end whitespace-nowrap">
          {group.members && group.members.length > 0 && (
            <p className="text-TEXT_LIGHTGRAY flex">
              {`${group.members.length} ${
                group.members.length === 1 ? "Mitglied" : "Mitglieder"
              }`}
            </p>
          )}
        </div>
      </div>
      {group.meetings && group.meetings.length > 0 ? (
        <div
          className={`${
            isDetailPage
              ? "paragraph-lead"
              : "lg:text-PURPLE_PRIMARY text-TEXT_LIGHTGRAY"
          } paragraph-md my-1`}
        >
          <span>
            {group.meetings
              .map((meeting) => getFormattedDate(meeting))
              .join(" & ")}
          </span>
        </div>
      ) : (
        <div
          className={`${
            isDetailPage
              ? "paragraph-lead"
              : "lg:text-PURPLE_PRIMARY text-TEXT_LIGHTGRAY"
          } paragraph-md my-1`}
        >
          Keine Treffen geplant
        </div>
      )}
      <div className="break-words">
        <p
          className={` ${clamp ? "line-clamp-5" : ""} ${
            isDetailPage ? "paragraph-md lg:paragraph-lg" : "paragraph-md"
          }`}
        >
          {group.description}
        </p>
      </div>
    </div>
  );
}
