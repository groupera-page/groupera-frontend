export default function GroupSettingStep({ data, updateGroupFields }) {
  return (
    <div className="">
      <h2 className="my-2">Pass die Einstellungen deiner Gruppe an.</h2>
      <p>
        Du kannst diese Einstellung jederzeit in den Gruppeneinstellungen
        ändern.
      </p>
      <h4 className="my-2">Möchtest du Deine Gruppe selbst moderieren?</h4>
      <div className="flex flex-col gap-4 my-4 ">
        <label
          htmlFor="radioOption1"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div>Ja</div>
          <input
            type="radio"
            id="radioOption1"
            name="options"
            value="option1"
            // checked={theme === "option1"}
            // onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption2"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Ja, aber mit Unterstützung</div>
          <input
            type="radio"
            id="radioOption2"
            name="options"
            value="option2"
            // checked={theme === "option2"}
            // onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption3"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> No</div>
          <input
            type="radio"
            id="radioOption3"
            name="options"
            value="option3"
            // checked={theme === "option2"}
            // onChange={(e) => updateGroupFields({ theme: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
      </div>
    </div>
  );
}
