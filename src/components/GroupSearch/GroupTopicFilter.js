import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../mockDataSlice";

export default function GroupTopicFilter() {
  const mockData = useSelector((state) => state.mockData.mockData);
  const groups = mockData.groups;
  const topics = mockData.topics;
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();

  const handleFilterButtonClick = (selectedTheme) => {
    const updatedFilters = selectedFilters.includes(selectedTheme)
      ? selectedFilters.filter((el) => el !== selectedTheme)
      : [...selectedFilters, selectedTheme];

    setSelectedFilters(updatedFilters);
    dispatch(setFilters(updatedFilters));
  };

  useEffect(() => {
    dispatch(setFilters(selectedFilters));
  }, [selectedFilters, groups]);

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2 mt-2 white whitespace-nowrap">
        {topics.map((topic, idx) => (
          <button
            onClick={() => handleFilterButtonClick(topic)}
            className={`border p-2 my-1 rounded text-base  cursor-pointer transition duration-200 ease-in-out hover:shadow-md ${
              selectedFilters?.includes(topic)
                ? "bg-BLUE_PRIMARY text-BG_PRIMARY"
                : "bg-transparent"
            }`}
            key={`topics-${idx}`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
