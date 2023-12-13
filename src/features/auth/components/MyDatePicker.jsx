import React from "react";
import DatePicker from "react-datepicker";
import de from "date-fns/locale/de";
import {AiOutlineCalendar} from "react-icons/ai";

const today = new Date();
const thirtyDaysFromNow = new Date();
thirtyDaysFromNow.setDate(today.getDate() + 30);

const MySimpleSelect = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  console.log(input)
  return (
    <div className="relative mt-2">
      <DatePicker
        selected={input.value}
        // dateFormat="dd MMM yyyy"
        onChange={(e) => input.onChange(e)}
        // default={dateDay}
        className="hover:shadow-md"
        minDate={today}
        maxDate={thirtyDaysFromNow}
        locale={de}
      />
      <AiOutlineCalendar className="absolute w-5 text-BG_PRIMARY left-40 z-10 top-1/2 transform -translate-y-1/2 pointer-events-none" />
    </div>
  );
};

export default MySimpleSelect;
