import React, { useState } from "react";
import GroupOverviewContent from "./GroupOverviewContent";
import { motion } from "framer-motion";
import MenuDropDown from "../Navigation/Menus/MenuDropDown";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Image } from "cloudinary-react";
import placeholderImage from "../../assets/placeholderImage.jpg";

export default function GroupDetailCard({ group }) {
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
              <PrimaryButton isInversed={true}>Gruppe Verlassen</PrimaryButton>
            </li>
          </MenuDropDown>
        </div>
      </div>
    </div>
  );
}
