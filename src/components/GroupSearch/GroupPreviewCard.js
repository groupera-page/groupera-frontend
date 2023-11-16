import React from "react";
import { Link } from "react-router-dom";
import placeholderForest from "../../assets/placeholderForest.jpg";
import PrimaryButton from "../Buttons/PrimaryButton";
import GroupOverviewContent from "../GroupDetails/GroupOverviewContent";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function GroupPreviewCard({ group }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeInVariants}
      transition={{ duration: 0.3 }}
      className="flex flex-col border rounded-md shadow-md h-full transition duration-200 ease-in-out"
    >
      <div className="flex flex-col border rounded-md shadow-md h-full">
        <div className="w-full h-64">
          <img
            src={placeholderForest}
            alt="Placeholder"
            className="rounded-t-md w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between p-4 flex-1">
          <GroupOverviewContent
            name={group.name}
            members={group.members}
            description={group.description}
            meeting={group.meeting}
          />
          <div className="mt-4">
            <Link to={`/groups/${group.id}/termine`}>
              <PrimaryButton type="button" isInversed>
                Mehr erfahren
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
