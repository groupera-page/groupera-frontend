import React from "react";

const themeOptions = [
  { title: "Depression", value: "Depression" },
  { title: "Stress und Burnout", value: "Stress und Burnout" },
  { title: "Panik- & Angststörung", value: "Panik- & Angststörung" },
  { title: "Trauer & Verlust", value: "Trauer & Verlust" },
  { title: "Essstörung", value: "Essstörung" },
  { title: "Sucht", value: "Sucht" },
  {
    title: "Angehörige/r von Menschen mit Erkrankungen",
    value: "Angehörige/r von Menschen mit Erkrankungen",
  },
  {
    title: "Chronische Erkrankungen, körperliche Einschränkungen",
    value: "Chronische Erkrankungen, körperliche Einschränkungen",
  },
  { title: "Andere*", value: "Andere*" },
];

export default function GrouThemesForm({ theme, updateGroupFields }) {
  return (
    <div className="">
      <h2 className="mb-4">Für welche Themen suchst du Gruppen?</h2>
      <p>Wähle eine oder mehrere der folgenden Optionen.</p>
      <div className="flex flex-col gap-4 my-2">
        {themeOptions.map((option) => (
          <label
            key={option.value}
            htmlFor={`radioOption${option.value}`}
            className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
          >
            <div>{option.title}</div>
            <input
              type="radio"
              id={`radioOption${option.value}`}
              name="options"
              value={option.value}
              checked={theme === option.value}
              onChange={(e) => updateGroupFields({ theme: e.target.value })}
              className="mr-1 absolute end-1 md:end-16"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
