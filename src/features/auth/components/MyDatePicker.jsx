import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../components/Signup/StepFormComponents/datepicker-override.css";
import de from "date-fns/locale/de";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineWarning } from "react-icons/ai";

const today = new Date();

let yearsBackMinorCheck = new Date();
yearsBackMinorCheck = yearsBackMinorCheck.setFullYear(today.getFullYear() - 20);

const thirtyDaysFromNow = new Date();
thirtyDaysFromNow.setDate(today.getDate() + 30);

const MyDatePicker = ({ input, label, type, meta: { touched, error } }) => {
  const selectedDate = input.value ? new Date(input.value) : null;
  const minDate = label === "Ab wann startet die Gruppe?" ? today : null;
  const maxDate = label === "Geburtstag" ? today : null;

  const handleDateChange = (date) => {
    const isoStringDate = date ? date.toISOString() : null;
    input.onChange(isoStringDate);
  };

  return (
    <div>
      <div className="paragraph-lg my-1.5">{label}</div>
      <div className="relative mt-2 w-full ">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          // className="hover:shadow-md w-full"
          minDate={minDate}
          maxDate={maxDate}
          locale={de}
          dateFormat="yyyy/MM/dd"
          showYearDropdown
          showMonthDropdown
          yearDropdownItemNumber={99}
          showDisabledMonthNavigation={true}
          showIcon={false}
          closeOnScroll={true}
          placeholderText="yyyy/MM/dd"
        />
        <AiOutlineCalendar
          className="absolute right-2 lg:right-6 z-10 top-1/2 -translate-y-1/2 pointer-events-none text-TEXT_GRAY"
          size={26}
        />
      </div>
      {touched && error && (
        <div className="flex px-4 gap-2 items-right bg-BG_PRIMARY text-PURPLE_PRIMARY border border-PURPLE_PRIMARY rounded-md p-1 my-1">
          <div>
            <AiOutlineWarning size={26} />
          </div>
          {error}
        </div>
      )}
    </div>
  );
};

export default MyDatePicker;
