import React from "react";
import RadioButton from "../../../UserInputs/RadioButton";
import StepHeader from "../StepHeader";
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

export default function GroupThemesStep({ theme, updateGroupFields }) {
  return (
    <div>
      <StepHeader title={"Für welche Themen suchst du Gruppen?"} />
      <p className="paragraph-md">
        Wähle eine oder mehrere der folgenden Optionen.
      </p>
      <div className="flex flex-col gap-3 my-2">
        {themeOptions.map((option) => (
          <RadioButton
            key={option.value}
            id={`radioOption${option.value}`}
            title={option.title}
            checkedVariable={theme}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
          />
        ))}
      </div>
    </div>
  );
}
