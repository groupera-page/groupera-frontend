import React from "react";
import { Link } from "react-router-dom";
import placeholderForest from "../../assets/placeholderForest.jpg";
import PrimaryButton from "../Buttons/PrimaryButton";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function GroupCard({ group, members = 17 }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeInVariants}
      transition={{ duration: 0.5 }}
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
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-row justify-between items-center">
              <h4> {group.name}</h4>
              <p className="text-TEXT_LIGHTGRAY"> {members} Mitglieder</p>
            </div>

            <p className="text-PURPLE_PRIMARY">{group.nextEventTime}</p>
            <p>{group.description}</p>
          </div>
          <div className="mt-4">
            <PrimaryButton type="button" isInversed>
              <Link to={`/groups/${group.id}`}>Mehr erfahren</Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
