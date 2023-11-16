import React from "react";
import GroupOverviewContent from "./GroupOverviewContent";
import placeholderForest from "../../assets/placeholderForest.jpg";
import { motion } from "framer-motion";

export default function GroupDetailCard({ group }) {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeInVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="my-2 lg:flex items-center gap-20">
        <div className="lg:w-1/2">
          <img
            src={placeholderForest}
            alt="Placeholder"
            className="rounded-md  object-cover"
          />
        </div>
        <div className="lg:w-1/3 my-4">
          <GroupOverviewContent
            name={group.name}
            members={group.members}
            description={group.description}
            meeting=""
          ></GroupOverviewContent>
        </div>
      </div>
    </motion.div>
  );
}
