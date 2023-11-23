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

  // Disable time that passed
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentTimeString = `${currentHours
    .toString()
    .padStart(2, "0")}:${currentMinutes.toString().padStart(2, "0")}`;

  return (
    <select
      value={selectedTime}
      onChange={(e) => {
        const newTime = e.target.value;
        onSelectTime(newTime, label === "To");
      }}
      className="rounded text-base bg-BG_PRIMARY cursor-pointer"
      style={{ WebkitAppearance: "none", appearance: "none" }}
    >
      {timeOptions.map((timeOption) => (
        <option
          key={timeOption}
          value={timeOption}
          disabled={isTimeOptionDisabled(
            label,
            timeOption,
            fromTime,
            currentTimeString
          )}
          className={
            isTimeOptionDisabled(label, timeOption, fromTime, currentTimeString)
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
//Disable time before "from time"
function isTimeOptionDisabled(label, timeOption, fromTime, currentTimeString) {
  if (label === "To") {
    return timeOption <= fromTime || timeOption < currentTimeString;
  } else {
    return timeOption < currentTimeString;
  }
}
