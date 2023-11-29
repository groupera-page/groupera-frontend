import React from "react";
import SecondaryButton from "../../Buttons/SecondaryButton";
import { BsPeopleFill } from "react-icons/bs";

export default function GroupTermineSubPage({ group }) {
  const mockData = [
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

  const calculateDuration = (start, end) => {
    const startDate = new Date(start.dateTime);
    const endDate = new Date(end.dateTime);
    const durationInMilliseconds = endDate - startDate;
    const durationInMinutes = durationInMilliseconds / (1000 * 60);

    return `${Math.floor(durationInMinutes)}min`;
  };

  const formatDateTime = (
    dateTimeString,
    includeYear = true,
    fullMonthName = true
  ) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: fullMonthName ? "long" : "short",
      timeZone: "Europe/Berlin",
    };

    if (includeYear) {
      options.year = "numeric";
    }

    return new Date(dateTimeString)
      .toLocaleDateString("de-DE", options)
      .replace(",", "");
  };

  return (
    <div>
      <div className="grid grid-cols-1 mt-6 gap-2">
        <div
          className={`hidden md:grid md:grid-cols-5 mx-2 paragraph-tiny text-black`}
        >
          <div>Datum</div>
          <div>Uhrzeit</div>
          <div>Dauer</div>
          <div>Teilnehmer</div>
          <div></div>
        </div>
        <hr className="hidden md:block border-l my-2" />
        {mockData.map((meeting) => (
          <div
            key={meeting.id}
            className="flex items-center bg-BG_GRAY paragraph-lg "
          >
            <div className="md:hidden grid grid-cols-3 py-2 items-center px-2 border rounded-md md:border-none w-full">
              <div>
                <div className="text-xl">
                  {formatDateTime(meeting.start.dateTime, false, false)}
                </div>

                <div className="flex gap-2">
                  <div>{meeting.start.time} </div>
                  <div>{calculateDuration(meeting.start, meeting.end)}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center">
                {group.users.length}
                <BsPeopleFill
                  className={`w-5 mr-3 text-PURPLE_PRIMARY `}
                  size={32}
                />
              </div>

              <div className="flex justify-end">
                <SecondaryButton>Anmelden</SecondaryButton>
              </div>
            </div>
            <div
              key={meeting.id}
              className="hidden md:grid grid-cols-5 py-2 items-center mx-2 border rounded-md md:border-none w-full"
            >
              <div className="hidden"></div>
              <div>{formatDateTime(meeting.start.dateTime, false)}</div>
              <div>{meeting.start.time} Uhr </div>
              <div>{calculateDuration(meeting.start, meeting.end)}</div>
              <div>{group.users.length} / 15</div>

              <div className="flex justify-end">
                <SecondaryButton>Anmelden</SecondaryButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
