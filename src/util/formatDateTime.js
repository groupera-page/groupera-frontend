export default function formatDateTime(
  dateTimeString,
  includeYear = true,
  fullMonthName = true
) {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    // year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Berlin",
  };

  if (includeYear) {
    options.year = "numeric";
  }

  return new Date(dateTimeString)
    .toLocaleDateString("de-DE", options)
    .replace(",", "");
}
