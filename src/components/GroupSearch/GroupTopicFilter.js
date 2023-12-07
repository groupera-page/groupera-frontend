import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../mockDataSlice";

const topicOptions = [
  "Depression",
  "Sucht",
  "Angststörung",
  "Stress & Burnout",
  "Trauer",
  "chronische Erkrankungen",
  "Essstörung",
  "Angehörige"
]

const GroupTopicFilter = ({onFilter, selectedTopic}) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2 mt-2 white whitespace-nowrap">
        {topicOptions.map((topic, index) => (
          <button
            onClick={() => onFilter(topic)}
            className={`border p-2 my-1 rounded text-base  cursor-pointer transition duration-200 ease-in-out hover:shadow-md ${
              selectedTopic === topic
                ? "bg-BLUE_PRIMARY text-BG_PRIMARY"
                : "bg-transparent"
            }`}
            key={`topics-${index}`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GroupTopicFilter;
