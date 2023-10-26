import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import TimePicker from "./TimePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";

export default function GroupPlanStep({ freq, day, time, updateGroupFields }) {
  const [fromTime, setFromTime] = useState(time.slice(0, 3) + time.slice(3, 5));
  const [toTime, setToTime] = useState(time.slice(5, 7) + time.slice(7, 11));

  const today = new Date();
  const thirtyDaysFromNow = new Date(today);
  thirtyDaysFromNow.setDate(today.getDate() + 30);
  if (day === "") {
    updateGroupFields({ day: today });
  }

  console.log("SENT DAY", day);
  // const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  // console.log("TIME:", { time });
  const handleTimeChange = (newTime, isFrom) => {
    const [hours, minutes] = newTime.split(":").map((str) => parseInt(str));
    // Calculate newToTime based on isFrom flag and constraints
    let newToTime;
    if (isFrom) {
      const newToHours = hours + 1;
      const newToMinutes = minutes;
      if (newToHours <= 22) {
        newToTime = `${newToHours.toString().padStart(2, "0")}:${newToMinutes
          .toString()
          .padStart(2, "0")}`;
      }
      console.log("change from time also");
      setFromTime(newTime);
      updateGroupFields({ time: newTime + toTime });
    } else {
      if (hours > 0 || (hours === 0 && minutes >= 30)) {
        newToTime = newTime;
      } else {
        const newToHours = hours + 1;
        const newToMinutes = minutes;
        newToTime = `${newToHours.toString().padStart(2, "0")}:${newToMinutes
          .toString()
          .padStart(2, "0")}`;
      }
      setToTime(newToTime);
      updateGroupFields({ time: fromTime + newToTime });
    }
  };

  return (
    <div className="">
      <h2 className="">Gruppentreffen planen</h2>
      <p className=" text-textLightGray">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </p>
      <h4 className="mt-4 mb-2">Startdatum</h4>
      <div>
        <DatePicker
          selected={day}
          dateFormat="dd MMM yyyy"
          onChange={(e) => updateGroupFields({ day: e })}
          default={day}
          className="w-full px-4 py-2 border rounded-md border-primaryblue text-sm bg-primaryBg"
          minDate={today}
          maxDate={thirtyDaysFromNow}
          locale={de}
        />
      </div>
      <h4 className="mt-4 mb-2">
        An welchen Tagen soll die Gruppe sich treffen?
      </h4>
      <div className="flex gap-4 ">
        <label
          htmlFor="radioOption1"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-4 pl-4 flex items-center gap-4"
        >
          <div>Einmalig</div>
          <input
            type="radio"
            id="radioOption1"
            name="options"
            value="Einmalig"
            checked={freq === "Einmalig"}
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
            value="Wöchentlich"
            checked={freq === "Wöchentlich"}
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
            value="Alle 2 Wochen"
            checked={freq === "Alle 2 Wochen"}
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
            value="Monatlich"
            checked={freq === "Monatlich"}
            onChange={(e) => updateGroupFields({ freq: e.target.value })}
            className="mr-1 absolute end-4 md:end-16"
          />
        </label>
      </div>

      {/* <h4 className="my-4">An welchen Tagen soll die Gruppe sich treffen?</h4> */}
      {/* <div className="flex justify-between my-4">
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
      </div> */}

      <h4 className="">Zu welcher Uhrzeit?</h4>
      <div className="flex my-2 border border-primaryblue rounded-md p-2 w-fit">
        <div className=" px-1">
          <TimePicker
            selectedTime={fromTime}
            onSelectTime={(newTime) => {
              handleTimeChange(newTime, true); // Pass 'true' to indicate 'From' time
            }}
            label="From"
            toTime={toTime}
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
