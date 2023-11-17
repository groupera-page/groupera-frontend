import React from "react";
import SecondaryButton from "../../Buttons/SecondaryButton";
import { BsPeopleFill } from "react-icons/bs";
export default function GroupTermineSubPage() {
  const data = [
    {
      id: 1,
      date: "29.11.23",
      time: "10:00",
      duration: "2h",
      teilnehmer: "2/10",
    },
    {
      id: 2,
      date: "24.12.23",
      time: "13:30",
      duration: "1.5h",
      teilnehmer: "99/100",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 mt-6 gap-2">
        <div className={`hidden md:grid md:grid-cols-5 text-xs mx-2`}>
          <div>Date</div>
          <div>Time</div>
          <div>Duration</div>
          <div>Teilnehmer</div>
          <div></div>
        </div>
        <hr className="hidden md:block border-l my-2" />
        {data.map((entry) => (
          <div key={entry.id} className="flex items-center">
            <div className="md:hidden grid grid-cols-3 py-2 text-sm items-center px-2 border rounded-md md:border-none w-full">
              <div>
                <div className="text-lg">{entry.date}</div>
                <div className="flex gap-2 text-xs">
                  <div>{entry.time}</div>
                  <div>{entry.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs justify-center">
                {entry.teilnehmer}
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
              key={entry.id}
              className="hidden md:grid grid-cols-5 py-2 text-sm items-center mx-2 border rounded-md md:border-none w-full"
            >
              <div className="hidden"></div>
              <div>{entry.date}</div>
              <div>{entry.time}</div>
              <div>{entry.duration}</div>
              <div>{entry.teilnehmer}</div>

              <div>
                <SecondaryButton>Anmelden</SecondaryButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
