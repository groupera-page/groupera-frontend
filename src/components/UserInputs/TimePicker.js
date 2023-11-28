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

  return (
    <select
      value={selectedTime}
      onChange={(e) => {
        const newTime = e.target.value;
        onSelectTime(newTime, label === "To");
      }}
      className="rounded text-base bg-BG_PRIMARY cursor-pointer hover:text-PURPLE_PRIMARY"
      style={{ WebkitAppearance: "none", appearance: "none" }}
    >
      {timeOptions.map((timeOption, index) => (
        <option key={timeOption} value={timeOption}>
          {timeOption}
        </option>
      ))}
    </select>
  );
}
