import React from "react";
import OverviewHeader from "./OverviewHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import formatDateTime from "../../util/formatDateTime";
import getNextEvent from "../../util/getNextEvent";

export default function OverviewNextEvent({ groups }) {
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

  const nextEvent = getNextEvent(mockDataEvents);

  return (
    <div className="lg:w-1/2 mt-10 mb-20">
      <div
        className={`flex flex-col lg:flex-row ${
          mockDataEvents.length > 0 ? "lg:flex-row" : "flex"
        } rounded-md shadow-md border justify-between`}
      >
        <div className="flex flex-col pt-4 lg:p-2 ">
          <OverviewHeader
            title={
              mockDataEvents.length > 0
                ? "Deine nächsten Termine"
                : "Deine Termine"
            }
            text={
              mockDataEvents.length > 0
                ? ""
                : "Du hast dich noch für keinen Termin angemeldet. "
            }
          />
          {mockDataEvents.length < 1 && (
            <div className="flex justify-center my-2">
              <PrimaryButton>Zur den Gruppen</PrimaryButton>
            </div>
          )}
          {mockDataEvents.length > 0 && (
            <div className="flex flex-col justify-center gap-1 mx-2">
              <div className="flex flex-col gap-1 mb-4">
                <p className="paragraph-md font-semibold line-clamp-2">
                  {groups[0].name}
                </p>
                <p className="paragraph-md text-TEXT_PRIMARY mb-2">
                  {nextEvent
                    ? formatDateTime(nextEvent.start.dateTime) + " Uhr"
                    : "Kein Termin geplant"}
                </p>
                <p className="paragraph-tiny text-TEXT_LIGHTGRAY ">
                  Ort: Online
                </p>
              </div>
            </div>
          )}
        </div>

        {mockDataEvents.length > 0 && (
          <div className="flex flex-row lg:flex-col justify-center gap-3 lg:mr-4 mb-2 ">
            <SecondaryButton>Abmelden</SecondaryButton>
            <PrimaryButton>Zur Videokonferenz</PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
}
