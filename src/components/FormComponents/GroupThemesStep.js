export default function GrouThemesForm({ theme, updateGroupFields }) {
  return (
    <div className="">
      <h2 className="my-2">Für welche Themen suchst du Gruppen?</h2>
      <p>Wähle eine oder mehrere der folgenden Optionen.</p>
      <div className="flex flex-col gap-4 my-4 ">
        <label
          htmlFor="radioOption1"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div>Depression</div>
          <input
            type="radio"
            id="radioOption1"
            name="options"
            value="option1"
            checked={theme === "option1"}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption2"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Stress und Burnout</div>
          <input
            type="radio"
            id="radioOption2"
            name="options"
            value="option2"
            checked={theme === "option2"}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption3"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Panik- & Angststörung</div>
          <input
            type="radio"
            id="radioOption3"
            name="options"
            value="option3"
            checked={theme === "option3"}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption4"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Trauer & Verlust</div>
          <input
            type="radio"
            id="radioOption4"
            name="options"
            value="option4"
            checked={theme === "option4"}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption5"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Essstörung</div>
          <input
            type="radio"
            id="radioOption5"
            name="options"
            value="option5"
            checked={theme === "option5"}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption6"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Sucht</div>
          <input
            type="radio"
            id="radioOption6"
            name="options"
            value="option6"
            checked={theme === "option6"}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption7"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Angehörige/r von Menschen mit Erkrankungen</div>
          <input
            type="radio"
            id="radioOption7"
            name="options"
            value="option7"
            checked={theme === "option7"}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption8"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Chronische Erkrankungen, körperliche Einschränkungen</div>
          <input
            type="radio"
            id="radioOption8"
            name="options"
            value="option8"
            checked={theme === "option8"}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption9"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Andere*</div>
          <input
            type="radio"
            id="radioOption9"
            name="options"
            value="option9"
            checked={theme === "option9"}
            onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
      </div>
    </div>
  );
}
