import React, { useState, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Image } from "cloudinary-react";

export default function Carousel({ imageData, img, updateGroupFields }) {
  const groupIndex = imageData.indexOf(img) ? imageData.indexOf(img) : 0;
  const [selectedImage, setSelectedImage] = useState(imageData[groupIndex]);
  const sliderRef = useRef(null);

  function slideScroll(direction) {
    if (sliderRef.current) {
      const slideAmount = 340;
      if (direction === "left") {
        sliderRef.current.scrollLeft -= slideAmount;
      } else {
        sliderRef.current.scrollLeft += slideAmount;
      }
    }
  }

  return (
    <div className="flex">
      <MdChevronLeft
        className="cursor-pointer opacity-60 hover:opacity-100 z-10 hidden lg:block translate-y-20"
        size={150}
        onClick={() => slideScroll("left")}
      />
      <div
        ref={sliderRef}
        className="overflow-x-scroll scroll-smooth rounded-md whitespace-nowrap scrollbar-hide"
      >
        <div className="flex gap-5 ">
          {imageData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-36 h-30 lg:w-80 lg:h-80">
                <Image
                  cloudName="di8ujuqae"
                  publicId={item}
                  className={
                    selectedImage === item
                      ? "rounded-md border-2 border-blue-500"
                      : "rounded-md"
                  }
                  onClick={() => {
                    updateGroupFields({ img: item });
                    setSelectedImage(item);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <MdChevronRight
        className="cursor-pointer opacity-60 hover:opacity-100 hidden lg:block translate-y-20"
        size={150}
        onClick={() => slideScroll("right")}
      />
    </div>
  );
}
