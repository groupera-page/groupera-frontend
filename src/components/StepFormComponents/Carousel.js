import React, { useRef } from "react";
import groupimage from "../../assets/hands4.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Carousel() {
  // Placeholder
  const imageData = Array(15).fill({
    image: groupimage,
    title: "Group",
  });

  //Get slider from DOM
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
        className=" cursor-pointer opacity-60 hover:opacity-100 z-10 hidden lg:block translate-y-20"
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
              <div className="w-36 h-36 lg:w-80 lg:h-80 mb-10">
                <img
                  src={item.image}
                  alt="Profile"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="">
                {item.title}
                {index} &rarr;
              </p>
            </div>
          ))}
        </div>
      </div>
      <MdChevronRight
        className=" cursor-pointer opacity-60 hover:opacity-100 hidden lg:block translate-y-20"
        size={150}
        onClick={() => slideScroll("right")}
      />
    </div>
  );
}
