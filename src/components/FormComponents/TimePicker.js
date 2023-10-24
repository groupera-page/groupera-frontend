import React from "react";

export default function TimePicker({
  selectedTime,
  onSelectTime,
  label,
  fromTime,
  toTime,
}) {
  const timeOptions = Array.from({ length: 24 * 2 }, (_, i) => {
    const hours = Math.floor(i / 2);
    const minutes = (i % 2) * 30;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  });

  return (
    <select
      value={selectedTime}
      onChange={(e) => {
        const newTime = e.target.value;
        onSelectTime(newTime, label === "To");
      }}
      className="rounded text-sm py-1 bg-primaryBg"
      style={{ WebkitAppearance: "none", appearance: "none" }}
    >
      {timeOptions.map((timeOption) => (
        <option
          key={timeOption}
          value={timeOption}
          disabled={isTimeOptionDisabled(label, timeOption, fromTime, toTime)}
          className={
            isTimeOptionDisabled(label, timeOption, fromTime, toTime)
              ? "disabled-option"
              : ""
          }
        >
          {timeOption}
        </option>
      ))}
    </select>
  );
}

function isTimeOptionDisabled(label, timeOption, fromTime, toTime) {
  if (label === "To") {
    return timeOption <= fromTime || timeOption >= toTime;
  } else {
    return timeOption >= toTime;
  }
}
