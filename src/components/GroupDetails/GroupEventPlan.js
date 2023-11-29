import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import PrimaryButton from "../Buttons/PrimaryButton";
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
    setFrequency(freq);
  }
  return (
    <div className="lg:w-2/3">
      <div className="paragraph-sm">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </div>
      <div className="mt-4 paragraph-lg">Startdatum</div>
      <div className="relative mb-4">
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
      <div className="mb-4">
        <div className=" paragraph-lg">
          An welchen Tagen soll die Gruppe sich treffen?
        </div>
        <RadioButtonContainer
          options={frequencyOptions}
          onChange={onHandleFreqChange}
          checkedVariable={frequency}
          name={"frequencyOptions"}
          horizontal={true}
        />
      </div>
      <div className="paragraph-lg">Zu welcher Uhrzeit?</div>
      <TimePickerContainer />

      <div className="flex justify-between mt-4">
        <PrimaryButton isInversed={true}>
          <div className="flex gap-2">
            <BsArrowLeft className="" size={20} />
            Abbrechen
          </div>
        </PrimaryButton>
        <PrimaryButton>Speichern</PrimaryButton>
      </div>
    </div>
  );
}
