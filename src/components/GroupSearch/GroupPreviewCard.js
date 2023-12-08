import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import GroupOverviewContent from "../GroupDetails/GroupOverviewContent";
import { motion } from "framer-motion";
import placeholderImage from "../../assets/placeholderImage.jpg";

const GroupPreviewCard = ({ group }) => {
  return (
    <div className="flex flex-col border rounded-md shadow-md h-full ">
      <div className="w-full">
        <motion.img
          src={placeholderImage}
          alt="Placeholder"
          className="rounded-md object-cover filter blur-md"
        />
      </div>

      <div className="flex flex-col justify-between px-4 h-full">
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
}

export default GroupPreviewCard
