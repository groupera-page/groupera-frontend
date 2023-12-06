import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import GroupOverviewContent from "../GroupDetails/GroupOverviewContent";
import { motion } from "framer-motion";
import { Image } from "cloudinary-react";
import placeholderImage from "../../assets/placeholderImage.jpg";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function GroupPreviewCard({ group }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="flex flex-col border rounded-md shadow-md h-full ">
      <div className="w-full">
        {!imageLoaded && (
          <motion.img
            src={placeholderImage}
            alt="Placeholder"
            className="rounded-md object-cover filter blur-md"
          />
        )}
        <motion.div
          initial="hidden"
          animate={imageLoaded ? "visible" : "hidden"}
          exit="exit"
          variants={fadeInVariants}
          transition={{ duration: 0.3 }}
          className="rounded-t-md overflow-hidden"
        >
          <Image
            cloudName="di8ujuqae"
            publicId={group.image}
            className="object-cover w-full"
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-between px-4 h-full">
        <GroupOverviewContent clamp={true} group={group} />
        {/* TODO FIX A LINK - GRUPPE GRÜNDEN */}
        <div className="my-4">
          {group.id === "" ? (
            <Link to={`group/create`}>
              <PrimaryButton type="button" isInversed>
                Gruppe gründen
              </PrimaryButton>
            </Link>
          ) : (
            <Link to={`/groups/${group.id}`}>
              <PrimaryButton type="button" isInversed>
                Mehr erfahren
              </PrimaryButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
