import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Searchbox({
  placeholderText="Gib hier deine Suche ein...",
  searchTerm = "",
  onSearch,
}) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(values)
  };

  return (
    <form className="w-full relative" onSubmit={handleSubmit}>
      <div className="flex items-center"></div>
      <input
        type="search"
        className={`w-full paragraph-md ps-10 p-2.5 border rounded-md  bg-BG_PRIMARY text-TEXT_PRIMARY shadow-sm
        `}
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholderText}
      />

      <button
        type="submit"
        className="absolute inset-y-0 start-0 flex items-center ps-3"
      >
        <BsSearch
          size={18}
          className="text-TEXT_LIGHTGRAY hover:text-TEXT_GRAY"
        />
      </button>
    </form>
  );
}
