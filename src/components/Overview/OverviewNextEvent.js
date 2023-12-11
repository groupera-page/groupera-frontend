import { useState, useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import formatDateTime from "../../util/formatDateTime";
import getNextEvent from "../../util/getNextEvent";

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

const OverviewNextEvent = ({ groups }) => {
  const [joinEventWarning, setJoinEventWarning] = useState(false);

  const handleButtonClick = () => {
    // setJoinEventWarning((prev) => !prev);
    setJoinEventWarning(true);
  };

  useEffect(() => {
    let timeoutId;
    if (joinEventWarning) {
      timeoutId = setTimeout(() => {
        setJoinEventWarning(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [joinEventWarning]);

  const nextEvent = getNextEvent(mockDataEvents);

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div className="flex flex-col pt-2">
          {mockDataEvents.length < 1 && (
            <div className="flex justify-center my-2">
              <PrimaryButton>Zur den Gruppen</PrimaryButton>
            </div>
          )}
          {mockDataEvents.length > 0 && (
            <div className="flex flex-col justify-center ">
              <div className="flex flex-col mb-2 ">
                <p className="paragraph-md font-semibold line-clamp-1 break-words">
                  {groups[0]?.name}
                </p>
                <p className="paragraph-sm text-TEXT_PRIMARY lg:mt-2">
                  {nextEvent
                    ? formatDateTime(nextEvent.start.dateTime) + " Uhr"
                    : "Kein Termin geplant"}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/4 pb-5 lg:p-2.5 lg:px-4">
          {mockDataEvents.length > 0 && (
            <div className="flex flex-row lg:flex-col h-full justify-center items-end w-full gap-3">
              <SecondaryButton>Abmelden</SecondaryButton>

              <div className="">
                <PrimaryButton handleButtonClick={handleButtonClick}>
                  Videokonferenz
                </PrimaryButton>
              </div>
            </div>
          )}
        </div>
      </div>
      {joinEventWarning && (
        <div className="flex justify-center paragraph-md text-PURPLE_PRIMARY mt-1 transition-opacity duration-300">
          Dein Termin hat noch nicht begonnen.
        </div>
      )}
    </div>
  );
};

export default OverviewNextEvent;
