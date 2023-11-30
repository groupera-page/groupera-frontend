import React, { useState } from "react";
import TimePicker from "./TimePicker";
import { BsArrowRight } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

export default function TimePickerContainer() {
  const [fromTime, setFromTime] = useState("10:00");
  const [toTime, setToTime] = useState("");

  const handleTimeChange = (newTime, isFrom) => {
    let updatedFromTime = fromTime;
    let updatedToTime = toTime;
    if (isFrom) {
      updatedFromTime = newTime;
    } else {
      updatedToTime = newTime;
    }
    // Check if fromTime is later than toTime and adjust if needed
    if (updatedFromTime > updatedToTime) {
      updatedToTime = updatedFromTime;
    }
    setFromTime(updatedFromTime);
    setToTime(updatedToTime);
  };
  return (
    <div>
      <div className="flex relative border border-TEXT_LIGHTGRAY rounded-md w-full h-full hover:shadow-md">
        <div className=" w-full">
          <TimePicker
            selectedTime={fromTime}
            onSelectTime={(newTime) => {
              handleTimeChange(newTime, true);
            }}
            label="From"
            toTime={toTime}
          />
        </div>

        <div className="absolute top-1/4 right-0  mx-4 flex items-center text-TEXT_LIGHTGRAY pointer-events-none">
          <BsClock size={20} />
        </div>
      </div>
    </div>
  );
}
