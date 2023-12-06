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

  const nextEvent = getNextEvent(mockDataEvents);

  return (
    <div className=" mt-6 lg:mt-20 ">
      <div
        className={`flex flex-col ${
          mockDataEvents.length > 0 ? "" : "flex-row"
        } rounded-md shadow-md border justify-between`}
      >
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="p-2.5 lg:px-4 lg:pt-2.5">
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

            <div className="flex justify-between">
              <div className="flex flex-col pt-2 ">
                {mockDataEvents.length < 1 && (
                  <div className="flex justify-center my-2">
                    <PrimaryButton>Zur den Gruppen</PrimaryButton>
                  </div>
                )}
                {mockDataEvents.length > 0 && (
                  <div className="flex flex-col justify-center ">
                    <div className="flex flex-col mb-2 ">
                      <p className="paragraph-md font-semibold line-clamp-1 break-words">
                        {groups[0].name}
                      </p>
                      <p className="paragraph-sm text-TEXT_PRIMARY lg:mt-2">
                        {nextEvent
                          ? formatDateTime(nextEvent.start.dateTime) + " Uhr"
                          : "Kein Termin geplant"}
                      </p>
                      {/* <p className="paragraph-tiny text-TEXT_LIGHTGRAY mt-2">
                        Ort: Online
                      </p> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pb-5 lg:p-2.5 lg:px-4">
            {mockDataEvents.length > 0 && (
              <div className="flex flex-row lg:flex-col h-full justify-center items-end gap-3 w-full ">
                <SecondaryButton>Abmelden</SecondaryButton>
                <PrimaryButton>Videokonferenz</PrimaryButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
