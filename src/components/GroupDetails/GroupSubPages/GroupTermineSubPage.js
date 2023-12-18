import React from "react";
import moment from "moment";

const GroupMeetingItem = ({meeting}) => {
  return (
    <div
      className="flex items-center bg-BG_GRAY paragraph-lg "
    >
      <div className="md:hidden grid grid-cols-3 py-2 items-center px-2 border rounded-2xl md:border-none w-full">
        <div className="paragraph-sm col-span-2">
          <div>{moment(meeting.startDate).format("dd, Do MMM YYYY")}</div>
          {moment(meeting.startDate).format("HH:mm")} Uhr
        </div>
        <div className="paragraph-sm">{meeting.duration} min</div>
      </div>
      <div
        className="hidden md:grid grid-cols-5 py-2 items-center mx-2 border rounded-md md:border-none w-full paragraph-md"
      >
        <div className={"col-span-2"}>{moment(meeting.startDate).format("dd, Do MMMM YYYY")}</div>
        <div>{moment(meeting.startDate).format("HH:mm")} Uhr</div>
        <div>{meeting.duration}</div>
      </div>
    </div>
  );
}

export default function GroupTermineSubPage({ group }) {
  if (!group.meetings || group.meetings.length === 0) {
    return (
      <div className="mt-6">
        <div className="flex items-center bg-BG_GRAY paragraph-lg ">
          <div className="grid grid-cols-3 py-2 items-center px-2 border rounded-2xl md:border-none w-full">
            <div className="paragraph-md">
              Keine Termine
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 mt-6 gap-2">
        <div
          className={`hidden md:grid md:grid-cols-5 mx-2 paragraph-tiny text-black border-b border-BORDER_PRIMARY pb-4`}
        >
          <div className={"col-span-2"}>Datum</div>
          <div>Uhrzeit</div>
          <div>Dauer</div>
          <div></div>
        </div>
        {
          group.futureMeetings && group.futureMeetings.length > 0 && group.futureMeetings.slice(0, 8).map((meeting, idx) => {
            return <GroupMeetingItem key={idx} meeting={meeting}/>
          })
        }
      </div>
    </div>
  );
}
