import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../mockDataSlice";

export default function GroupThemeFilter() {
  const mockData = useSelector((state) => state.mockData.mockData);
  const mockDataGroups = mockData.groups;
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();

  const filters = ["Depression", "Sucht", "Angst"];

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
      <div className="flex gap-2">
        {filters.map((Theme, idx) => (
          <button
            onClick={() => handleFilterButtonClick(Theme)}
            className={`border p-2 my-2 rounded text-xs cursor-pointer transition duration-200 ease-in-out ${
              selectedFilters?.includes(Theme)
                ? "bg-BLUE_PRIMARY text-BG_PRIMARY"
                : "bg-transparent"
            }`}
            key={`filters-${idx}`}
          >
            {Theme}
          </button>
        ))}
      </div>
    </div>
  );
}
