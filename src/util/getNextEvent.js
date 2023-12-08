export default function getNextEvent(meetings) {
  const currentDate = new Date();
  const futureMeetings = meetings.filter(
    (meeting) => new Date(meeting.start.dateTime) > currentDate
  );
  futureMeetings.sort(
    (a, b) => new Date(a.start.dateTime) - new Date(b.start.dateTime)
  );
  return futureMeetings[0];
}
