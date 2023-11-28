import React, { useState } from "react";
import TimePicker from "./TimePicker";
import { BsArrowRight } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

export default function TimePickerContainer({ title }) {
  const [fromTime, setFromTime] = useState("");
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
      <div className="paragraph-lg">{title}</div>
      <div className="flex border border-TEXT_LIGHTGRAY rounded-md p-3 w-fit hover:shadow-md">
        <div className="px-1">
          <TimePicker
            selectedTime={fromTime}
            onSelectTime={(newTime) => {
              handleTimeChange(newTime, true);
            }}
            label="From"
            toTime={toTime}
          />
        </div>
        <div className="mx-4 flex items-center text-TEXT_LIGHTGRAY">
          <BsArrowRight size={15} />
        </div>
        <div className=" px-1 ">
          <TimePicker
            selectedTime={toTime}
            onSelectTime={(newTime) => {
              handleTimeChange(newTime, false);
            }}
            label="To"
            fromTime={fromTime}
          />
        </div>
        <div className="mx-4 flex items-center text-TEXT_LIGHTGRAY">
          <BsClock size={20} />
        </div>
      </div>
    </div>
  );
}
