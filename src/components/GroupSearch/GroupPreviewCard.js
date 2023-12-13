import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import GroupOverviewContent from "../GroupDetails/GroupOverviewContent";
import LazyLoadImg from "../LazyLoadImg";

const GroupPreviewCard = ({ group }) => {
  return (
    <div className="flex flex-col border rounded-md shadow-md h-full ">
      <div className="w-full">
        <LazyLoadImg img={group.img} />
      </div>

      <div className="flex flex-col justify-between px-4 h-full max-w-sm">
        <GroupOverviewContent clamp={true} group={group} />
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
