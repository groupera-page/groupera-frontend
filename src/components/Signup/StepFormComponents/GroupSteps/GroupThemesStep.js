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
    title: "Angehörige/r von Erkrankten",
    value: "Angehörige/r von Erkrankten",
  },
  {
    title: "Chronische Erkrankungen",
    value: "Chronische Erkrankungen",
  },
  { title: "Andere*", value: "Andere*" },
];

export default function GroupThemesStep({ theme, updateGroupFields }) {
  return (
    <div>
      <StepHeader title={"Zu welchem Thema möchtest du eine Gruppe gründen?"} />
      <p className="paragraph-lg text-TEXT_LIGHTGRAY ">
        Wähle eine der folgenden Optionen.
      </p>
      <div className="flex flex-col gap-2.5 ">
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
