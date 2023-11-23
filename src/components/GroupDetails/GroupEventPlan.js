import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import TimePicker from "../Signup/StepFormComponents/TimePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";
import RadioButton from "../UserInputs/RadioButton";

export default function GroupEventPlan() {
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [frequency, setFrequency] = useState("Einmalig");
  const today = new Date();
  const thirtyDaysFromNow = new Date();
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
    setFromTime(updatedFromTime);
    setToTime(updatedToTime);
  };

  return (
    <div className="">
      <p className=" text-TEXT_LIGHTGRAY">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </p>
      <h4 className="mt-4 mb-2">Startdatum</h4>
      <div className="relative">
        <DatePicker
          //   showIcon
          selected={calendarDate}
          //   dateFormat="dd MMM yyyy"
          onChange={(e) => setCalendarDate(e)}
          className=""
          minDate={calendarDate}
          maxDate={thirtyDaysFromNow}
          locale={de}
        />
        <AiOutlineCalendar
          className="absolute left-36 top-1/2  -translate-y-1/2 pointer-events-none"
          size={20}
        />
      </div>

      <h4 className="mt-4 mb-2">
        An welchen Tagen soll die Gruppe sich treffen?
      </h4>
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <RadioButton
          id={"freq1"}
          title={"Einmalig"}
          checkedVariable={frequency}
          onChange={(e) => setFrequency()}
          fullSize={false}
        />
        <RadioButton
          id={"freq2"}
          title={"Wöchentlich"}
          checkedVariable={frequency}
          onChange={(e) => setFrequency(e)}
          fullSize={false}
        />

        <RadioButton
          id={"freq3"}
          title={"Alle 2 Wochen"}
          checkedVariable={frequency}
          onChange={(e) => setFrequency(e)}
          fullSize={false}
        />
        <RadioButton
          id={"freq4"}
          title={"Monatlich"}
          checkedVariable={frequency}
          onChange={(e) => setFrequency(e)}
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
        <div className="mx-4 flex items-center">
          <BsClock size={15} />
        </div>
      </div>
    </div>
  );
}
