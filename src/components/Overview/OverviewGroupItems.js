import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import { Link } from "react-router-dom";
import formatDateTime from "../../util/formatDateTime";
import getNextEvent from "../../util/getNextEvent";

export default function OverviewGroupItems({ groups }) {
  // TODO Loop through groups in mockdata to find the events (coming from google calendar API)

  const mockDataEvents = [
    {
      id: "33dk58ss8dflia9emc3epprlpk_20231120T110000",
      start: {
        dateTime: "2023-12-20T12:00:00+01:00",
        time: "12:00",
      },
      end: {
        dateTime: "2023-12-20T12:30:00+01:00",
      },
    },
    {
      id: "33dk58ss8dflia9emc3epprlpk_20231204T110000Z",
      start: {
        dateTime: "2023-12-24T12:00:00+01:00",
        time: "12:00",
      },
      end: {
        dateTime: "2023-12-24T12:30:00+01:00",
      },
    },
  ];

  return (
    <>
      {groups.map((group, index) => (
        <div key={index}>
          <p className="paragraph-md mt-3 font-semibold line-clamp-1 break-words w-2/3">
            {group.name}
          </p>
          <div className="flex justify-between pb-4 border-BORDER_PRIMARY border-b ">
            <div className="flex flex-col justify-center gap-2 w-2/3 ">
              <div>
                <p className="paragraph-tiny text-TEXT_LIGHTGRAY mt-2">
                  Nächster Termin:
                </p>
                <p className="paragraph-sm text-TEXT_PRIMARY lg:mt-2">
                  {getNextEvent(mockDataEvents)
                    ? formatDateTime(
                        getNextEvent(mockDataEvents).start.dateTime,
                        false
                      ) + " Uhr"
                    : "Kein Termin geplant"}
                </p>
              </div>
            </div>
            <div className=" justify-start ml-2">
              <Link to={`/groups/${group.id}/termine`}>
                <SecondaryButton> Zur Gruppe</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
