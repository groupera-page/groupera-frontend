import React from "react";

export default function TimePicker({
  selectedTime,
  onSelectTime,
  label,
  fromTime,
}) {
  const timeOptions = Array.from({ length: 24 * 2 }, (_, i) => {
    const hours = Math.floor(i / 2);
    const minutes = (i % 2) * 30;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  });

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    onSelectTime(newTime);
  };

  const isToTimePicker = label === "To"; // Check if it's the "To" time picker

  return (
    <select
      value={selectedTime}
      onChange={handleTimeChange}
      className="rounded text-sm py-1 bg-primaryBg"
      style={{ WebkitAppearance: "none", appearance: "none" }}
    >
      {timeOptions.map((timeOption) => (
        <option
          key={timeOption}
          value={timeOption}
          disabled={isToTimePicker && timeOption <= fromTime}
        >
          {timeOption}
        </option>
      ))}
    </select>
  );
}
