import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../mockDataSlice";

export default function GroupTopicFilter() {
  const mockData = useSelector((state) => state.mockData.mockData);
  const mockDataGroups = mockData.groups;
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();

  const filters = [
    "Depression",
    "Sucht",
    "Angststörung",
    "Stress & Burnout",
    "Trauer",
    "chronische Erkrankungen",
    "Essstörung",
    "Angehörige",
  ];

  const handleFilterButtonClick = (selectedTheme) => {
    const updatedFilters = selectedFilters.includes(selectedTheme)
      ? selectedFilters.filter((el) => el !== selectedTheme)
      : [...selectedFilters, selectedTheme];

    setSelectedFilters(updatedFilters);
    dispatch(setFilters(updatedFilters));
  };

  useEffect(() => {
    dispatch(setFilters(selectedFilters));
  }, [selectedFilters, mockDataGroups]);

  return (
    <div>
      <div className="flex flex-wrap">
        {filters.map((topic, idx) => (
          <button
            onClick={() => handleFilterButtonClick(topic)}
            className={`border p-2 my-1 mr-2 rounded text-xs cursor-pointer transition duration-200 ease-in-out hover:shadow-md ${
              selectedFilters?.includes(topic)
                ? "bg-BLUE_PRIMARY text-BG_PRIMARY"
                : "bg-transparent"
            }`}
            key={`filters-${idx}`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
