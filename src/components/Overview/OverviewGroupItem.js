import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import { Link } from "react-router-dom";
import getFormattedDate from "../../util/formatMeetingDate";

const OverviewGroupItem = ({ group }) => (
  <div>
    <p className="paragraph-md mt-3 font-semibold line-clamp-1 break-words w-2/3">
      {group.name}
    </p>
    <div className="flex justify-between pb-4 border-BORDER_PRIMARY border-b ">
      <div className="flex flex-col justify-center gap-2 w-2/3 ">
        <div>
          <p className="paragraph-tiny text-TEXT_LIGHTGRAY mt-2">
            Nächster Termin:
          </p>
          <p className="paragraph-sm text-TEXT_PRIMARY lg:mt-1">
            {group.meetings && group.meetings.length > 0
              ? <span>
                {group.meetings.map((meeting) => getFormattedDate(meeting)).join(', ')}
              </span>
              : "Kein Termin geplant"}
          </p>
        </div>
      </div>
      <div className=" justify-start ml-2">
        <Link to={`/groups/${group.id}`}>
          <SecondaryButton> Zur Gruppe</SecondaryButton>
        </Link>
      </div>
    </div>
  </div>
);

export default OverviewGroupItem;
