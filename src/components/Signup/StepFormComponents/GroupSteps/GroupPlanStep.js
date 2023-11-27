import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";
import RadioButtonContainer from "../../../UserInputs/RadioButtonContainer";
import TimePickerContainer from "../../../UserInputs/TimePickerContainer";
import StepHeader from "../StepHeader";

export default function GroupPlanStep({ freq, day, time, updateGroupFields }) {
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
    setFrequency(freq);
  }

  return (
    <div>
      <StepHeader
        title={"Gruppentreffen planen"}
        text={
          " Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern"
        }
      />

      <h4 className="mt-4 mb-2">Startdatum</h4>
      <div className="relative">
        <DatePicker
          selected={calendarDate}
          // dateFormat="dd MMM yyyy"
          onChange={(e) => setCalendarDate(e)}
          // default={dateDay}
          className="hover:shadow-md"
          minDate={calendarDate}
          maxDate={thirtyDaysFromNow}
          locale={de}
        />
        <AiOutlineCalendar className="absolute w-5 text-BG_PRIMARY left-40 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>

      <h4 className="mt-4 mb-2">
        An welchen Tagen soll die Gruppe sich treffen?
      </h4>
      <RadioButtonContainer
        options={frequencyOptions}
        onChange={onHandleFreqChange}
        checkedVariable={frequency}
        name={"frequencyOptions"}
      />

      <TimePickerContainer title={"Zu welcher Uhrzeit?"} />
    </div>
  );
}
