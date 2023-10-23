import React, { useState } from "react";

export default function GroupPlanStep({ freq, day, time, updateGroupFields }) {
  const [fromTime, setFromTime] = useState("12:00");
  const [toTime, setToTime] = useState("13:00");

  const handleHoursFromChange = (e) => {
    const newTime = `${e.target.value}:${fromTime.split(":")[1]}`;
    if (newTime <= toTime) {
      setFromTime(newTime);
      updateGroupFields({ time: `${newTime}:${toTime}` });
    }
  };

  const handleMinutesFromChange = (e) => {
    const newTime = `${fromTime.split(":")[0]}:${e.target.value}`;
    if (newTime <= toTime) {
      setFromTime(newTime);
      updateGroupFields({ time: `${newTime}:${toTime}` });
    }
  };

  const handleHoursToChange = (e) => {
    const newTime = `${e.target.value}:${toTime.split(":")[1]}`;
    if (newTime >= fromTime) {
      setToTime(newTime);
      updateGroupFields({ time: `${fromTime}:${newTime}` });
    }
  };

  const handleMinutesToChange = (e) => {
    const newTime = `${toTime.split(":")[0]}:${e.target.value}`;
    if (newTime >= fromTime) {
      setToTime(newTime);
      updateGroupFields({ time: `${fromTime}:${newTime}` });
    }
  };

  let height = 12;
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
      <div className="flex justify-between  my-4 ">
        <label
          htmlFor="radioOption1Day"
          className={`relative w-${height} h-${height} cursor-pointer border border-primaryblue rounded-full text-xs p-4 pl-4 flex items-center justify-center gap-4 ${
            day === "option1Day" ? "bg-primaryblue" : "bg-white"
          }`}
        >
          <div cals>Mo</div>
          <input
            type="radio"
            id="radioOption1Day"
            name="optionsDays"
            value="option1Day"
            checked={day === "option1Day"}
            onChange={(e) => updateGroupFields({ day: e.target.value })}
            className="mr-1 absolute end-4 md:end-16 hidden"
          />
        </label>
        <label
          htmlFor="radioOption2Day"
          className={`relative w-${height} h-${height} cursor-pointer border border-primaryblue rounded-full text-xs p-4 pl-4 flex items-center justify-center gap-4 ${
            day === "option2Day" ? "bg-primaryblue" : "bg-white"
          }`}
        >
          <div> Di</div>
          <input
            type="radio"
            id="radioOption2Day"
            name="optionsDays"
            value="option2Day"
            checked={day === "option2Day"}
            onChange={(e) => updateGroupFields({ day: e.target.value })}
            className="hidden"
          />
        </label>
        <label
          htmlFor="radioOption3Day"
          className={`relative w-${height} h-${height} cursor-pointer border border-primaryblue rounded-full text-xs p-4 pl-4 flex items-center justify-center gap-4 ${
            day === "option3Day" ? "bg-primaryblue" : "bg-white"
          }`}
        >
          <div> Mi</div>
          <input
            type="radio"
            id="radioOption3Day"
            name="optionsDays"
            value="option3Day"
            checked={day === "option3Day"}
            onChange={(e) => updateGroupFields({ day: e.target.value })}
            className="hidden"
          />
        </label>
        <label
          htmlFor="radioOption4Day"
          className={`relative w-${height} h-${height} cursor-pointer border border-primaryblue rounded-full text-xs p-4 pl-4 flex items-center justify-center gap-4 ${
            day === "option4Day" ? "bg-primaryblue" : "bg-white"
          }`}
        >
          <div> Do</div>
          <input
            type="radio"
            id="radioOption4Day"
            name="optionsDays"
            value="option4Day"
            checked={day === "option4Day"}
            onChange={(e) => updateGroupFields({ day: e.target.value })}
            className="hidden"
          />
        </label>
        <label
          htmlFor="radioOption5Day"
          className={`relative w-${height} h-${height} cursor-pointer border border-primaryblue rounded-full text-xs p-4 pl-4 flex items-center justify-center gap-4 ${
            day === "option5Day" ? "bg-primaryblue" : "bg-white"
          }`}
        >
          <div> Fr</div>
          <input
            type="radio"
            id="radioOption5Day"
            name="optionsDays"
            value="option5Day"
            checked={day === "option5Day"}
            onChange={(e) => updateGroupFields({ day: e.target.value })}
            className="hidden"
          />
        </label>
        <label
          htmlFor="radioOption6Day"
          className={`relative w-${height} h-${height} cursor-pointer border border-primaryblue rounded-full text-xs p-4 pl-4 flex items-center justify-center gap-4 ${
            day === "option6Day" ? "bg-primaryblue" : "bg-white"
          }`}
        >
          <div> Sa</div>
          <input
            type="radio"
            id="radioOption6Day"
            name="optionsDays"
            value="option6Day"
            checked={day === "option6Day"}
            onChange={(e) => updateGroupFields({ day: e.target.value })}
            className="hidden"
          />
        </label>
        <label
          htmlFor="radioOption7Day"
          className={`relative w-${height} h-${height} cursor-pointer border border-primaryblue rounded-full text-xs p-4 pl-4 flex items-center justify-center gap-4 ${
            day === "option7Day" ? "bg-primaryblue" : "bg-white"
          }`}
        >
          <div> So</div>
          <input
            type="radio"
            id="radioOption7Day"
            name="optionsDays"
            value="option7Day"
            checked={day === "option7Day"}
            onChange={(e) => updateGroupFields({ day: e.target.value })}
            className="hidden"
          />
        </label>
      </div>
      <h4 className="my-4">Zu welcher Uhrzeit?</h4>
      <div className="flex my-4 border border-primaryblue rounded-md p-2 w-fit">
        <div className=" pr-1">
          <div className="">
            <select
              id="hoursFrom"
              name="hoursFrom"
              className=" rounded text-xs py-1 px-1 bg-primaryBg"
              value={parseInt(time.split(":")[0], 10)} // Extract hours and convert to a number
              onChange={handleHoursFromChange}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            <select
              id="minutesFrom"
              name="minutesFrom"
              className="rounded text-xs py-1 px-1 right-0 bg-primaryBg"
              value={parseInt(time.split(":")[1], 10)} // Extract minutes and convert to a number
              onChange={handleMinutesFromChange}
            >
              {Array.from({ length: 4 }, (_, i) => (
                <option key={i} value={i * 15}>
                  {(i * 15).toString().padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mx-4">→</div>
        <div className=" pr-1">
          <div className="">
            <select
              id="hoursTo"
              name="hoursTo"
              className="rounded text-xs py-1 px-1 bg-primaryBg"
              value={parseInt(time.split(":")[2], 10)} // Extract hours and convert to a number
              onChange={handleHoursToChange}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            <select
              id="minutesTo"
              name="minutesTo"
              className=" rounded text-xs py-1 px-1 right-0 bg-primaryBg"
              value={parseInt(time.split(":")[3], 10)} // Extract minutes and convert to a number
              onChange={handleMinutesToChange}
            >
              {Array.from({ length: 4 }, (_, i) => (
                <option key={i} value={i * 15}>
                  {(i * 15).toString().padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="ml-4">🕑</div>
      </div>
    </div>
  );
}
