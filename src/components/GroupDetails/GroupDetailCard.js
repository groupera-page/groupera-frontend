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
  const [previewImage, setPreviewImage] = useState(group.image);

  function handleEditImage() {
    setShowImagePicker(!showImagePicker);
  }

  function updatePreviewImage(image) {
    setPreviewImage(image);
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
            publicId={previewImage}
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
          <div className="paragraph-lg mt-4 mb-2 "> Gruppenbild ändern</div>
          <GroupEditImage updatePreviewImage={updatePreviewImage} />
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
            <div className="paragraph-lg mt-4 mb-2 "> Gruppenbild ändern</div>
            <GroupEditImage updatePreviewImage={updatePreviewImage} />
          </div>
        )}
      </div>
    </div>
  );
}
