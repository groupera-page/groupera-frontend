const translateType = {
	"weekly": "Wöchentlich",
	"bi-weekly": "Alle 2 Wochen",
	"monthly": "Monatlich",
}

const translateDay = {
	0: "So",
	1: "Mo",
	2: "Di",
	3: "Mi",
	4: "Do",
	5: "Fr",
	6: "Sa"
}

const getFormatedDate = (meeting) => {
	const translatedType = translateType[meeting.recurrence.type]
	const translatedDays = meeting.recurrence.days.map(d => translateDay[d])

	const hrs = new Date(meeting.startDate).getHours().toString().padStart(2, "0")
	const min = new Date(meeting.startDate).getMinutes().toString().padStart(2, "0")
	if (meeting.recurrence.type === "weekly" || meeting.recurrence.type === "bi-weekly") {
		return `${translatedType}, ${translatedDays.join("+")} ${hrs}:${min} Uhr`
	} else{
		return `${translatedType}, ${hrs}:${min} Uhr`
	}
}

export default getFormatedDate

export const isNowBetween = (startDate, endDate) => {
	const now = new Date();
	const start = new Date(startDate);
	const end = new Date(endDate);

	return now >= start && now <= end;
};
