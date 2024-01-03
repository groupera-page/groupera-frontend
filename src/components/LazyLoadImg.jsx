import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "cloudinary-react";

import overlayImage from "../assets/overlayImage.jpg";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const LazyLoadImg = ({ img }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!img.public_id) {
    return <img src={img} alt="normal-img" />;
  }

  return (
    <div className="w-full">
      {!imageLoaded && (
        <motion.img
          src={overlayImage}
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
          publicId={img.public_id}
          className="object-cover w-full"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
    </div>
  );
};

export default LazyLoadImg;
