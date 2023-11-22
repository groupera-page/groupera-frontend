import React, { useState } from "react";
import GroupOverviewContent from "./GroupOverviewContent";
import GroupEditContent from "./GroupEditContent";
import { motion } from "framer-motion";
import MenuDropDown from "../Navigation/Menus/MenuDropDown";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Image } from "cloudinary-react";
import placeholderImage from "../../assets/placeholderImage.jpg";
import { Link } from "react-router-dom";

export default function GroupDetailCard({ group, isAdmin, isEditable }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="my-2 md:flex items-center gap-20">
      <div className="md:w-1/2 relative">
        {!imageLoaded && (
          <img
            src={placeholderImage}
            alt="Placeholder"
            className="rounded-md object-cover filter blur-md"
          />
        )}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeInVariants}
          transition={{ duration: 0.3 }}
        >
          <Image
            cloudName="di8ujuqae"
            publicId={group.image}
            className={`rounded-md object-cover transition-opacity ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
          />{" "}
        </motion.div>
        {isEditable && (
          <div className="flex justify-center">
            <div className="text-PURPLE_PRIMARY my-2">
              Gruppenbild bearbeiten
            </div>
          </div>
        )}
      </div>

      <div className="md:w-1/3 my-4">
        {isEditable ? (
          <GroupEditContent group={group} />
        ) : (
          <div>
            <GroupOverviewContent group={group} clamp={false} />
            <div className="flex justify-end my-4">
              <MenuDropDown
                title={`${isAdmin ? "Du bist Admin" : "Du bist Mitglied"}`}
                topOffset={10}
                isButtonDropDown={true}
              >
                <Link to={`/groups/${group.id}/edit`}>
                  <li className="">
                    <PrimaryButton isInversed={true}>
                      {`${isAdmin ? "Gruppe bearbeiten" : "Gruppe Verlassen"}`}
                    </PrimaryButton>
                  </li>
                </Link>
              </MenuDropDown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
