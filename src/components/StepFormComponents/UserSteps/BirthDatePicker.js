import React from "react";

export default function CustomDatePicker({ selectedDate, handleDateChange }) {
  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const days = [];
  for (
    let i = 1;
    i <=
    daysInMonth(
      new Date(selectedDate).getFullYear(),
      new Date(selectedDate).getMonth()
    );
    i++
  ) {
    days.push(i);
  }

  const months = [
    "Jan",
    "Feb",
    "März",
    "Apr",
    "Mai",
    "Juni",
    "Juli",
    "Aug",
    "Sept",
    "Okt",
    "Nov",
    "Dez",
  ];

  const years = [];
  const currentYear = new Date().getFullYear();
  const pastYears = currentYear - 100; // 100 years ago
  for (let year = currentYear; year >= pastYears; year--) {
    years.push(year);
  }

  const handleDayChange = (e) => {
    const day = e.target.value;
    const month = new Date(selectedDate).getMonth();
    const year = new Date(selectedDate).getFullYear();
    handleDateChange(new Date(year, month, day));
  };

  const handleMonthChange = (e) => {
    const month = months.indexOf(e.target.value);
    const day = new Date(selectedDate).getDate();
    const year = new Date(selectedDate).getFullYear();
    handleDateChange(new Date(year, month, day));
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    const month = new Date(selectedDate).getMonth();
    const day = new Date(selectedDate).getDate();
    handleDateChange(new Date(year, month, day));
  };

  return (
    <div className="flex flex-between my- border border-primaryblue rounded-md p-2 py-3 w-fit gap-4 text-sm">
      <select
        value={new Date(selectedDate).getDate()}
        onChange={handleDayChange}
        className="bg-primaryBg"
        style={{
          WebkitAppearance: "none",
          appearance: "none",
          margin: "0px 5px 0px 10px",
          cursor: "pointer",
        }}
      >
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <select
        value={months[new Date(selectedDate).getMonth()]}
        onChange={handleMonthChange}
        className="bg-primaryBg"
        style={{
          WebkitAppearance: "none",
          appearance: "none",
          cursor: "pointer",
        }}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <select
        value={new Date(selectedDate).getFullYear()}
        onChange={handleYearChange}
        className="bg-primaryBg"
        style={{
          WebkitAppearance: "none",
          appearance: "none",
          margin: "0px 10px 0px 0px",
          cursor: "pointer",
        }}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
