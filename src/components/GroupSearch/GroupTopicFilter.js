import React from "react";
import {groupThemeOptions} from "../../util/form.helper";

const GroupTopicFilter = ({onFilter, selectedTopic}) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2 mt-2 white whitespace-nowrap">
        {groupThemeOptions.map((opt, index) => (
          <button
            onClick={() => onFilter(opt.value)}
            className={`border p-2 my-1 rounded text-base  cursor-pointer transition duration-200 ease-in-out hover:shadow-md ${
              selectedTopic === opt
                ? "bg-BLUE_PRIMARY text-BG_PRIMARY"
                : "bg-transparent"
            }`}
            key={`topics-${index}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GroupTopicFilter;
