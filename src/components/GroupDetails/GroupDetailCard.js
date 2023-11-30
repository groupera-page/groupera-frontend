import React, { useState } from "react";
import GroupOverviewContent from "./GroupOverviewContent";
import GroupEditContent from "./GroupEditContent";
import { motion } from "framer-motion";
import MenuDropDown from "../Navigation/Menus/MenuDropDown";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Image } from "cloudinary-react";
import placeholderImage from "../../assets/placeholderImage.jpg";
import { Link } from "react-router-dom";
import GroupEditImage from "./GroupEditImage";

export default function GroupDetailCard({ group, isAdmin, isEditable }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);

  function handleEditImage() {
    setShowImagePicker(!showImagePicker);
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="my-2 lg:flex gap-12 md:mx-20 lg:mx-0">
      <div className="flex lg:w-1/2 relative items-center">
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
          />
        </motion.div>

        {isEditable && (
          <div
            className="flex justify-center cursor-pointer"
            onClick={handleEditImage}
          ></div>
        )}
      </div>

      {isEditable && (
        <div className="lg:hidden">
          <h5 className="mt-4 mb-2"> Gruppenbild ändern</h5>
          <GroupEditImage />
        </div>
      )}

      <div className="lg:w-1/2 my-4">
        {isEditable ? (
          <GroupEditContent group={group} />
        ) : (
          <div>
            <GroupOverviewContent
              group={group}
              clamp={false}
              isDetailPage={true}
            />
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
        {isEditable && (
          <div className="hidden lg:block">
            <h5 className="mt-4 mb-2 "> Gruppenbild ändern</h5>
            <GroupEditImage />
          </div>
        )}
      </div>
    </div>
  );
}
