import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";
import RadioButton from "../UserInputs/RadioButton";
import TimePickerContainer from "../UserInputs/TimePickerContainer";

export default function GroupEventPlan() {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [frequency, setFrequency] = useState("Einmalig");
  const today = new Date();
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(today.getDate() + 30);

  return (
    <div className="">
      <p className=" text-TEXT_LIGHTGRAY">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </p>
      <h4 className="mt-4 mb-2">Startdatum</h4>
      <div className="relative ">
        <DatePicker
          selected={calendarDate}
          //   dateFormat="dd MMM yyyy"
          onChange={(e) => setCalendarDate(e)}
          className="hover:shadow-md"
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
          onChange={(e) => setFrequency("Einmalig")}
          fullSize={false}
        />
        <RadioButton
          id={"freq2"}
          title={"Wöchentlich"}
          checkedVariable={frequency}
          onChange={(e) => setFrequency("Wöchentlich")}
          fullSize={false}
        />

        <RadioButton
          id={"freq3"}
          title={"Alle 2 Wochen"}
          checkedVariable={frequency}
          onChange={(e) => setFrequency("Alle 2 Wochen")}
          fullSize={false}
        />
        <RadioButton
          id={"freq4"}
          title={"Monatlich"}
          checkedVariable={frequency}
          onChange={(e) => setFrequency("Monatlich")}
          fullSize={false}
        />
      </div>

      <TimePickerContainer title={"Zu welcher Uhrzeit?"} />
    </div>
  );
}
