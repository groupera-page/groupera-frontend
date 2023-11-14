import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function GroupThemeFilter() {
  const mockData = useSelector((state) => {
    return state.mockData.mockData;
  });

  const mockDataGroups = mockData.groups;
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(mockDataGroups);

  //Set in store and get from there?
  let filters = ["Depression", "Sucht", "Angst"];
  const handleFilterButtonClick = (selectedTheme) => {
    if (selectedFilters.includes(selectedTheme)) {
      let filters = selectedFilters.filter((el) => el !== selectedTheme);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedTheme]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedTheme) => {
        let temp = mockDataGroups.filter(
          (item) => item.theme === selectedTheme
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...mockDataGroups]);
    }
  };

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

      <div className="flex ">
        {filteredItems.map((item, idx) => (
          <div
            key={`items-${idx}`}
            className="p-2 m-2 border rounded flex flex-col justify-between"
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
