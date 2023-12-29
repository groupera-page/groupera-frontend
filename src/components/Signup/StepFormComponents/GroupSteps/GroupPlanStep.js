// import React, { useState } from "react";
// import { AiOutlineCalendar } from "react-icons/ai";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import de from "date-fns/locale/de";
// import RadioButtonContainer from "../../../UserInputs/RadioButtonContainer";
// import TimePickerContainer from "../../../UserInputs/TimePickerContainer";
// import StepHeader from "../StepHeader";

// export default function GroupPlanStep({ freq, day, time, updateGroupFields }) {
//   const [calendarDate, setCalendarDate] = useState(new Date());
//   const [frequency, setFrequency] = useState("Einmalig");
//   const [timeChoice, setTimeChoice] = useState("60 minuten");

//   const today = new Date();
//   const thirtyDaysFromNow = new Date();
//   thirtyDaysFromNow.setDate(today.getDate() + 30);

//   const frequencyOptions = [
//     // "Einmalig",
//     "Wöchentlich",
//     "Alle 2 Wochen",
//     "Monatlich",
//   ];
//   const timeOptions = ["60 minuten", "90 minuten"];

//   function onHandleFreqChange(freq) {
//     setFrequency(freq);
//   }

//   function onHandleTimeChange(timeChoice) {
//     setTimeChoice(timeChoice);
//   }

//   return (
//     <div>
//       <StepHeader
//         title={"Gruppentreffen planen"}
//         text={
//           " Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern"
//         }
//       />

//       <div className="paragraph-lg mt-4">Ab wann startet die Gruppe?</div>
//       <div className="relative mt-2">
//         <DatePicker
//           selected={calendarDate}
//           // dateFormat="dd MMM yyyy"
//           onChange={(e) => setCalendarDate(e)}
//           // default={dateDay}
//           className="hover:shadow-md"
//           minDate={calendarDate}
//           maxDate={thirtyDaysFromNow}
//           locale={de}
//         />
//         <AiOutlineCalendar className="absolute w-5 text-BG_PRIMARY left-40 top-1/2 transform -translate-y-1/2 pointer-events-none" />
//       </div>

//       <div className="paragraph-lg mt-4 mb-2">
//         An welchen Tagen soll die Gruppe sich treffen?
//       </div>
//       <RadioButtonContainer
//         options={frequencyOptions}
//         onChange={onHandleFreqChange}
//         checkedVariable={frequency}
//         name={"frequencyOptions"}
//       />
//       <div className="paragraph-lg mt-4 mb-2">Zu welcher Uhrzeit?</div>
//       <div className="flex gap-4">
//         <div className="w-1/2 lg:w-1/2 ">
//           <TimePickerContainer />
//         </div>
//         <div className="w-1/2 lg:w-1/2f whitespace-nowrap">
//           <RadioButtonContainer
//             options={timeOptions}
//             onChange={onHandleTimeChange}
//             checkedVariable={timeChoice}
//             name={"timeOptions"}
//             horizontal={true}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
