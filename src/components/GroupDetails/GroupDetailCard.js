import React from "react";
import GroupOverviewContent from "./GroupOverviewContent";
import placeholderForest from "../../assets/placeholderForest.jpg";
import { motion } from "framer-motion";
import MenuDropDown from "../Navigation/Menus/MenuDropDown";
import PrimaryButton from "../Buttons/PrimaryButton";

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
      <div className="my-2 md:flex items-center gap-20">
        <div className="md:w-1/2">
          <img
            src={placeholderForest}
            alt="Placeholder"
            className="rounded-md  object-cover"
          />
        </div>

        <div className="md:w-1/3 my-4">
          <GroupOverviewContent
            name={group.name}
            members={group.members}
            description={group.description}
            meeting=""
          ></GroupOverviewContent>
          <div className="flex justify-end my-4">
            <MenuDropDown
              title={"Du bist Mitglied"}
              topOffset={10}
              isButtonDropDown={true}
            >
              <li className="">
                <div className="flex w-fit ">
                  <PrimaryButton isInversed={true}>
                    Gruppe Verlassen
                  </PrimaryButton>
                </div>
              </li>
            </MenuDropDown>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
