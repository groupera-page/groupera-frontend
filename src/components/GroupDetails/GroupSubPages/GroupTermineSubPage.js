import { useState, useEffect } from "react";
import moment from "moment";
import getFormatedDate, { isNowBetween } from "../../../util/formatMeetingDate";
import PrimaryButton from "../../Buttons/PrimaryButton";

const GroupMeetingItem = ({ meeting }) => {
  const [joinEventWarning, setJoinEventWarning] = useState(false);

  const handleButtonClick = (nextEvent) => {
    // Implement same logic as in Overviewnextevent!
    // if (!nextEvent) return;
    // const endTime = new Date(nextEvent.meeting.startDate);
    // endTime.setMinutes(
    //   new Date(endTime).getMinutes() + nextEvent.meeting.duration
    // );

    // if (!isNowBetween(new Date(nextEvent.meeting.startDate), endTime)) {
    //   setJoinEventWarning(true);
    // }
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

  return (
    <div>
      <div
        key={meeting.id}
        className="flex items-center bg-BG_GRAY paragraph-lg "
      >
        <div className="md:hidden grid grid-cols-3 py-2 items-center px-2 border rounded-2xl md:border-none w-full">
          <div className=" paragraph-sm col-span-3">
            {getFormatedDate(meeting)}
            {/*{moment(meeting.startDate).format("HH:mm")} Uhr*/}
            <div className="flex justify-between">
              {" "}
              <div className="paragraph-sm">{meeting.duration} min</div>
              <PrimaryButton handleButtonClick={handleButtonClick}>
                Videokonferenz
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div
          key={meeting.id}
          className="hidden md:grid grid-cols-5 py-2 items-center mx-2 border rounded-md md:border-none w-full paragraph-md"
        >
          <div>{getFormatedDate(meeting, false)}</div>
          <div>{moment(meeting.startDate).format("HH:mm")} Uhr</div>
          <div>{meeting.duration}</div>
          <PrimaryButton handleButtonClick={handleButtonClick}>
            Videokonferenz
          </PrimaryButton>
        </div>
      </div>
      {joinEventWarning && (
        <div className="flex justify-center paragraph-md text-PURPLE_PRIMARY transition-opacity duration-300">
          Dein Termin hat noch nicht begonnen.
        </div>
      )}
    </div>
  );
};

export default function GroupTermineSubPage({ group }) {
  if (!group.meetings || group.meetings.length === 0) {
    return (
      <div className="mt-6">
        <div className="flex items-center bg-BG_GRAY paragraph-lg ">
          <div className="grid grid-cols-3 py-2 items-center px-2 border rounded-2xl md:border-none w-full">
            <div className="paragraph-md">Keine Termine</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 mt-6 gap-2">
        <div
          className={`hidden md:grid md:grid-cols-5 mx-2 paragraph-tiny text-black border-b border-BORDER_PRIMARY pb-4`}
        >
          <div>Datum</div>
          <div>Uhrzeit</div>
          <div>Dauer</div>
          <div></div>
        </div>

        {group.meetings &&
          group.meetings.length > 0 &&
          group.meetings.map((meeting) => (
            <div className="">
              <GroupMeetingItem meeting={meeting} />
            </div>
          ))}
      </div>
    </div>
  );
}
