import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import PrimaryButton from "../Buttons/PrimaryButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";
import TimePickerContainer from "../UserInputs/TimePickerContainer";
import RadioButtonContainer from "../UserInputs/RadioButtonContainer";
import { Link, useParams } from "react-router-dom";

export default function GroupEventPlan() {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [frequency, setFrequency] = useState("Einmalig");
  const [timeChoice, setTimeChoice] = useState("60 minuten");
  const { slug } = useParams();

  const today = new Date();
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(today.getDate() + 30);
  const frequencyOptions = [
    "Einmalig",
    "Wöchentlich",
    "Alle 2 Wochen",
    "Monatlich",
  ];

  const timeOptions = ["60 minuten", "90 minuten"];

  function onHandleFreqChange(freq) {
    setFrequency(freq);
  }

  function onHandleTimeChange(timeChoice) {
    setTimeChoice(timeChoice);
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
      <div className="paragraph-lg mt-4">Zu welcher Uhrzeit?</div>
      <div className="flex gap-4">
        <div className="w-1/2 lg:w-1/4 ">
          <TimePickerContainer />
        </div>
        <div className="w-1/2 lg:w-1/4 whitespace-nowrap">
          <RadioButtonContainer
            options={timeOptions}
            onChange={onHandleTimeChange}
            checkedVariable={timeChoice}
            name={"timeOptions"}
            horizontal={true}
          />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Link to={`/groups/${slug}/edit`}>
          <PrimaryButton isInversed={true}>
            <div className="flex gap-2 items-center">
              <BsArrowLeft className="" size={20} />
              Abbrechen
            </div>
          </PrimaryButton>
        </Link>
        <PrimaryButton>Speichern</PrimaryButton>
      </div>
    </div>
  );
}
