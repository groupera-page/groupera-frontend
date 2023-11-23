import React from "react";
import OverviewHeader from "./OverviewHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

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

  const getNextMeeting = (meetings) => {
    const currentDate = new Date();
    const futureMeetings = meetings.filter(
      (meeting) => new Date(meeting.start.dateTime) > currentDate
    );
    futureMeetings.sort(
      (a, b) => new Date(a.start.dateTime) - new Date(b.start.dateTime)
    );
    return futureMeetings[0];
  };

  const nextEvent = getNextMeeting(mockDataEvents);

  const formatDateTime = (dateTimeString) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Europe/Berlin",
    };

    return new Date(dateTimeString)
      .toLocaleDateString("de-DE", options)
      .replace(",", "");
  };

  return (
    <div className="lg:w-1/2 mt-10">
      <div
        className={`flex ${
          mockDataEvents.length > 0 ? "flex-row" : "flex-col"
        } rounded-md shadow-md border justify-between`}
      >
        <div className="flex flex-col p-2 ">
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
                <p className="font-medium">{groups[0].name}</p>
                <p className="mb-2">
                  {nextEvent
                    ? formatDateTime(nextEvent.start.dateTime)
                    : "Kein Termin geplant"}
                </p>
              </div>
            </div>
          )}
        </div>

        {mockDataEvents.length > 0 && (
          <div className="flex flex-col justify-center gap-1 mr-4">
            <SecondaryButton>Abmelden</SecondaryButton>
            <PrimaryButton>Zur Videokonferenz</PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
}
