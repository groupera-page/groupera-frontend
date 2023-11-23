import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import TimePicker from "../../../UserInputs/TimePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";
import RadioButton from "../../../UserInputs/RadioButton";

export default function GroupPlanStep({ freq, day, time, updateGroupFields }) {
  const [fromTime, setFromTime] = useState(time.slice(0, 3) + time.slice(3, 5));
  const [toTime, setToTime] = useState(time.slice(5, 7) + time.slice(7, 11));
  const today = new Date();
  const thirtyDaysFromNow = new Date(today);
  let dateDay = day;
  if (typeof dateDay === "string") {
    dateDay = new Date(day);
  }
  thirtyDaysFromNow.setDate(today.getDate() + 30);

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
    const updatedTime = updatedFromTime + updatedToTime;
    // Calculate time difference for backend
    const startTime = updatedFromTime.slice(0, 2);
    const endTime = updatedToTime.slice(0, 2);
    const timeDifference = endTime - startTime;
    updateGroupFields({
      time: updatedTime,
      length:
        timeDifference +
        ":" +
        (updatedToTime.slice(3, 5) - updatedFromTime.slice(3, 5)),
    });

    setFromTime(updatedFromTime);
    setToTime(updatedToTime);
  };

  return (
    <div className="">
      <h2 className="">Gruppentreffen planen</h2>
      <p className=" text-TEXT_LIGHTGRAY">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </p>
      <h4 className="mt-4 mb-2">Startdatum</h4>
      <div className="relative">
        <DatePicker
          selected={dateDay}
          dateFormat="dd MMM yyyy"
          onChange={(e) => updateGroupFields({ day: e })}
          default={dateDay}
          className="w-full px-4 py-2 border rounded-md border-BLUE_PRIMARY text-sm bg-BG_PRIMARY cursor-pointer"
          minDate={today}
          maxDate={thirtyDaysFromNow}
          locale={de}
        />
        <AiOutlineCalendar className="absolute w-5 text-BG_PRIMARY left-40 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>

      <h4 className="mt-4 mb-2">
        An welchen Tagen soll die Gruppe sich treffen?
      </h4>
      <div className="flex gap-4">
        <RadioButton
          id={"freq1"}
          title={"Einmalig"}
          checkedVariable={freq}
          onChange={(e) => updateGroupFields({ freq: e.target.value })}
          fullSize={false}
        />
        <RadioButton
          id={"freq2"}
          title={"Wöchentlich"}
          checkedVariable={freq}
          onChange={(e) => updateGroupFields({ freq: e.target.value })}
          fullSize={false}
        />
      </div>
      <div className="flex gap-4 my-4 ">
        <RadioButton
          id={"freq3"}
          title={"Alle 2 Wochen"}
          checkedVariable={freq}
          onChange={(e) => updateGroupFields({ freq: e.target.value })}
          fullSize={false}
        />
        <RadioButton
          id={"freq4"}
          title={"Monatlich"}
          checkedVariable={freq}
          onChange={(e) => updateGroupFields({ freq: e.target.value })}
          fullSize={false}
        />
      </div>

      <h4 className="">Zu welcher Uhrzeit?</h4>
      <div className="flex my-2 border border-BLUE_PRIMARY rounded-md p-2 w-fit">
        <div className=" px-1">
          <TimePicker
            selectedTime={fromTime}
            onSelectTime={(newTime) => {
              handleTimeChange(newTime, true);
            }}
            label="From"
            toTime={toTime}
          />
        </div>
        <div className="mx-4 flex items-center">
          <BsArrowRight className="w-5  text-BG_PRIMARY" />
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
        <div className="mx-4 flex items-center">
          <BsClock className="w-5  text-BG_PRIMARY" />
        </div>
      </div>
    </div>
  );
}
