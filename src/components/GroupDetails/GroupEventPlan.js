import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";
import TimePickerContainer from "../UserInputs/TimePickerContainer";
import RadioButtonContainer from "../UserInputs/RadioButtonContainer";

export default function GroupEventPlan() {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [frequency, setFrequency] = useState("Einmalig");
  const today = new Date();
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(today.getDate() + 30);
  const frequencyOptions = [
    "Einmalig",
    "Wöchentlich",
    "Alle 2 Wochen",
    "Monatlich",
  ];

  function onHandleFreqChange(freq) {
    console.log(freq);
    setFrequency(freq);
  }
  return (
    <div>
      <div className="paragraph-sm">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </div>
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
      <RadioButtonContainer
        title={"An welchen Tagen soll die Gruppe sich treffen?"}
        options={frequencyOptions}
        onChange={onHandleFreqChange}
        checkedVariable={frequency}
        name={"frequencyOptions"}
      />
      <TimePickerContainer title={"Zu welcher Uhrzeit?"} />
    </div>
  );
}
