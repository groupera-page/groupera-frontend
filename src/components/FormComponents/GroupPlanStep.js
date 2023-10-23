import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import TimePicker from "./TimePicker";

export default function GroupPlanStep({ freq, day, time, updateGroupFields }) {
  const [fromTime, setFromTime] = useState("12:00");
  const [toTime, setToTime] = useState("13:00");
  const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  const handleTimeChange = (newTime, isFrom) => {
    const [hours, minutes] = newTime.split(":").map((str) => parseInt(str));

    // Ensure toTime is between 30 minutes and 2 hours later than fromTime
    if (isFrom) {
      setFromTime(newTime);
      const newToHours = hours + 1;
      const newToMinutes = minutes;
      if (newToHours <= 22) {
        const newToTime = `${newToHours
          .toString()
          .padStart(2, "0")}:${newToMinutes.toString().padStart(2, "0")}`;
        setToTime(newToTime);
      }
    } else {
      if (hours > 0 || (hours === 0 && minutes >= 30)) {
        setToTime(newTime);
      } else {
        // If the selected toTime is not within the range, set it to one hour later than fromTime
        const newToHours = hours + 1;
        const newToMinutes = minutes;
        const newToTime = `${newToHours
          .toString()
          .padStart(2, "0")}:${newToMinutes.toString().padStart(2, "0")}`;
        setToTime(newToTime);
      }
    }

    updateGroupFields({ time: fromTime + toTime });
  };

  return (
    <div className="">
      <h2 className="my-2">Gruppentreffen planen</h2>
      <p>Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern</p>
      <h4 className="my-4">An welchen Tagen soll die Gruppe sich treffen?</h4>
      <div className="flex gap-4 my-4 ">
        <label
          htmlFor="radioOption1"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-4 pl-4 flex items-center gap-4"
        >
          <div>Einmalig</div>
          <input
            type="radio"
            id="radioOption1"
            name="options"
            value="option1"
            checked={freq === "option1"}
            onChange={(e) => updateGroupFields({ freq: e.target.value })}
            className="mr-1 absolute end-4 md:end-16 "
          />
        </label>
        <label
          htmlFor="radioOption2"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-4 pl-4 flex items-center gap-4"
        >
          <div> Wöchentlich</div>
          <input
            type="radio"
            id="radioOption2"
            name="options"
            value="option2"
            checked={freq === "option2"}
            onChange={(e) => updateGroupFields({ freq: e.target.value })}
            className="mr-1 absolute end-4 md:end-16"
          />
        </label>
      </div>
      <div className="flex gap-4 my-4 ">
        <label
          htmlFor="radioOption3"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-4 pl-4 flex items-center gap-4"
        >
          <div> Alle 2 Wochen</div>
          <input
            type="radio"
            id="radioOption3"
            name="options"
            value="option3"
            checked={freq === "option3"}
            onChange={(e) => updateGroupFields({ freq: e.target.value })}
            className="mr-1 absolute end-4 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption4"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-4 pl-4 flex items-center gap-4"
        >
          <div> Monatlich</div>
          <input
            type="radio"
            id="radioOption4"
            name="options"
            value="option4"
            checked={freq === "option4"}
            onChange={(e) => updateGroupFields({ freq: e.target.value })}
            className="mr-1 absolute end-4 md:end-16"
          />
        </label>
      </div>
      <h4 className="my-4">An welchen Tagen soll die Gruppe sich treffen?</h4>
      <div className="flex justify-between my-4">
        {weekdays.map((dayLabel, index) => (
          <label
            key={index}
            htmlFor={`radioOption${index + 1}Day`}
            className={`relative cursor-pointer border border-primaryblue text-xs p-4 pl-4 flex items-center justify-center gap-4 w-12 h-12 rounded-full ${
              day === `option${index + 1}Day` ? "bg-primaryblue" : "bg-white"
            }`}
          >
            <div>{dayLabel}</div>
            <input
              type="radio"
              id={`radioOption${index + 1}Day`}
              name="optionsDays"
              value={`option${index + 1}Day`}
              checked={day === `option${index + 1}Day`}
              onChange={(e) => updateGroupFields({ day: e.target.value })}
              className="hidden"
            />
          </label>
        ))}
      </div>
      <h4 className="my-4">Zu welcher Uhrzeit?</h4>
      <div className="flex my-4 border border-primaryblue rounded-md p-2 w-fit">
        <div className=" px-1">
          <TimePicker
            selectedTime={fromTime}
            onSelectTime={(newTime) => {
              handleTimeChange(newTime, true); // Pass 'true' to indicate 'From' time
            }}
            label="From"
          />
        </div>
        <div className="mx-4 flex items-center">
          <BsArrowRight className="w-5  text-primarybg" />
        </div>
        <div className=" px-1">
          <TimePicker
            selectedTime={toTime}
            onSelectTime={(newTime) => {
              handleTimeChange(newTime, false); // Pass 'false' to indicate 'To' time
            }}
            label="To"
            fromTime={fromTime}
          />
        </div>
        <div className="mx-4 flex items-center">
          <BsClock className="w-5  text-primarybg" />
        </div>
      </div>
    </div>
  );
}
