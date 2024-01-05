import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import getFormattedDate from "../../util/formatMeetingDate";
import LazyLoadImg from "../LazyLoadImg";
import TextPreviewContainer from "../GlobalLayout/TextPreviewContainer";

const GroupPreviewCard = ({ group }) => {
  return (
    <div className="flex flex-col border rounded-md shadow-md max-h-full overflow-hidden">
      <div className="w-full">
        <LazyLoadImg img={group.img} />
      </div>

      <div className="flex flex-col justify-between px-4 max-h-full overflow-auto">
        <div className="max-w-full">
          <TextPreviewContainer
            clamp={true}
            group={group}
            title={group.name}
            subTitle={
              group.meetings && group.meetings.length > 0 ? (
                <>
                  {group.meetings
                    .map((meeting) => getFormattedDate(meeting))
                    .join(" & ")}
                </>
              ) : (
                "Keine Treffen geplant"
              )
            }
            text={group.description}
            miniHeading={
              group.members &&
              group.members.length > 0 && (
                <>
                  {`${group.members.length} ${
                    group.members.length === 1 ? "Mitglied" : "Mitglieder"
                  }`}
                </>
              )
            }
          />
        </div>
        <div className="my-4">
          <Link to={`/groups/${group.id}`}>
            <PrimaryButton type="button" isInversed>
              Mehr erfahren
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupPreviewCard;
