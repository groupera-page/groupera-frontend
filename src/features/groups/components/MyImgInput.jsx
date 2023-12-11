import React, {useRef} from "react";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {Image} from "cloudinary-react";

const MyImgInput = ({
  input,
  options,
}) => {
  const sliderRef = useRef(null);

  const handleSelect = (e, opt) => {
    return input.onChange({public_id: opt});
  };

  const slideScroll = (direction) => {
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
    <div className="flex items-center my-4">
      <MdChevronLeft
        className="cursor-pointer opacity-60 hover:opacity-100 z-10 hidden lg:block "
        size={50}
        onClick={() => slideScroll("left")}
      />
      <div
        ref={sliderRef}
        className="overflow-x-scroll scroll-smooth rounded-md whitespace-nowrap scrollbar-hide"
      >
        <div className="flex gap-5 ">
          {options.map((opt, idx) => (
            <div key={idx} className="text-center">
              <div className="w-36 h-30 ">
                <Image
                  cloudName="di8ujuqae"
                  publicId={opt}
                  className={
                    input.value.public_id === opt
                      ? "rounded-md border-2 border-blue-500 cursor-pointer"
                      : "rounded-md cursor-pointer"
                  }
                  onClick={(e) => handleSelect && handleSelect(e, opt)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <MdChevronRight
        className="cursor-pointer opacity-60 hover:opacity-100 hidden lg:block "
        size={50}
        onClick={() => slideScroll("right")}
      />
    </div>
  );
};

export default MyImgInput;
