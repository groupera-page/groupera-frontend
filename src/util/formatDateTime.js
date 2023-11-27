export default function formatDateTime(dateTimeString) {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Berlin",
  };

  return new Date(dateTimeString)
    .toLocaleDateString("de-DE", options)
    .replace(",", "");
}
