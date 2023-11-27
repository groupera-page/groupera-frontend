import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import { Link } from "react-router-dom";
import formatDateTime from "../../util/formatDateTime";
import getNextEvent from "../../util/getNextEvent";

export default function OverviewGroupItems({ groups }) {
  // TODO Loop through groups in mockdata to find the events (coming from google calendar API)
  const mockDataEvents = [
    {
      id: "33dk58ss8dflia9emc3epprlpk_20231120T110000Z",
      start: {
        dateTime: "2023-11-20T12:00:00+01:00",
        time: "12:00",
      },
      end: {
        dateTime: "2023-11-20T12:30:00+01:00",
      },
    },
    {
      id: "33dk58ss8dflia9emc3epprlpk_20231204T110000Z",
      start: {
        dateTime: "2023-12-04T12:00:00+01:00",
        time: "12:00",
      },
      end: {
        dateTime: "2023-12-04T12:30:00+01:00",
      },
    },
  ];

  return (
    <div className="mx-2 flex-col">
      {groups.map((group, index) => {
        const nextMeeting = getNextEvent(group.meetings || mockDataEvents);

        return (
          <div key={index}>
            <div className="flex justify-between items-center my-4">
              <div className="flex flex-col justify-center gap-2 ">
                <p className="text-xl lg:text-base font-medium line-clamp-1">
                  {group.name}
                </p>
                <div>
                  <p className="paragraph-sm text-TEXT_LIGHTGRAY lg:text-sm ">
                    Nächster Termin
                  </p>
                  <p className="text-base">
                    {nextMeeting
                      ? formatDateTime(nextMeeting.start.dateTime)
                      : "Kein Termin geplant"}
                  </p>
                </div>
              </div>
              <div className="ml-1">
                <Link to={`/groups/${group.id}/termine`}>
                  <SecondaryButton> Zur Gruppe</SecondaryButton>
                </Link>
              </div>
            </div>
            <hr className="border-t border-gray-300" />
          </div>
        );
      })}
    </div>
  );
}
