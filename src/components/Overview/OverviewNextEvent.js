import { useState, useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { isNowBetween } from "../../util/formatMeetingDate";
import moment from "moment/moment";
import {useNavigate} from "react-router-dom";

const OverviewNextEvent = ({ nextEvent }) => {
  const [joinEventWarning, setJoinEventWarning] = useState(false);
  const navigate = useNavigate()

  const handleButtonClick = () => {
    // setJoinEventWarning((prev) => !prev);
    if (!nextEvent) return;
    const endTime = new Date(nextEvent.meeting.startDate);
    endTime.setMinutes(
      new Date(endTime).getMinutes() + nextEvent.meeting.duration
    );

    if (!isNowBetween(new Date(nextEvent.meeting.startDate), endTime)) {
      setJoinEventWarning(true);
    } else{
      navigate(`/meeting/${nextEvent.meeting.roomId}`)
    }
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

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div className="flex flex-col pt-2">
          {!nextEvent ? (
            <div className="flex justify-center">
              <p className="paragraph-sm text-TEXT_PRIMARY lg:mt-2">
                Kein Termin geplant
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-center ">
              <div className="flex flex-col mb-2 ">
                <p className="paragraph-md font-semibold line-clamp-1 break-words">
                  {nextEvent.group.name}
                </p>
                <p className="paragraph-sm text-TEXT_PRIMARY lg:mt-2">
                  {moment(nextEvent.meeting.startDate).format("dddd, Do MMMM YYYY")}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/2 pb-5 lg:p-2.5 lg:px-4">
          {nextEvent && (
            <div className="flex flex-row lg:flex-col h-full justify-center items-end w-full gap-3">
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
