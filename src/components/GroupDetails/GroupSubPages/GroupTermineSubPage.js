import React from "react";
import SecondaryButton from "../../Buttons/SecondaryButton";
import moment from "moment";
import getFormatedDate from "../../../util/formatMeetingDate";

const GroupMeetingItem = ({meeting}) => {
  return (
    <div
      key={meeting.id}
      className="flex items-center bg-BG_GRAY paragraph-lg "
    >
      <div className="md:hidden grid grid-cols-3 py-2 items-center px-2 border rounded-2xl md:border-none w-full">
        <div>
          <div className="paragraph-md">
            {moment(meeting.startDate).format()}
          </div>

          <div className="flex gap-2 paragraph-sm">
            <div>{meeting.duration}</div>
          </div>
        </div>

        <div className="flex justify-end">
          <SecondaryButton>Anmelden</SecondaryButton>
        </div>
      </div>
      <div
        key={meeting.id}
        className="hidden md:grid grid-cols-5 py-2 items-center mx-2 border rounded-md md:border-none w-full paragraph-md"
      >
        <div>{getFormatedDate(meeting, false)}</div>
        <div>{moment(meeting.startDate).format("hh:mm")} Uhr</div>
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
          <div>Datum</div>
          <div>Uhrzeit</div>
          <div>Dauer</div>
          <div></div>
        </div>
        {
          group.meetings && group.meetings.length > 0 && group.meetings.map((meeting) => <GroupMeetingItem meeting={meeting}/>)
        }
      </div>
    </div>
  );
}
