import React, { useState } from "react";

export default function GroupSettingStep({ moderator, updateGroupFields }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleNoModerator = (e) => {
    setShowMessage(true);
    updateGroupFields({ moderator: e.target.value });
  };

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
            value="ja"
            checked={moderator === "Ja"}
            onChange={(e) => updateGroupFields({ moderator: e.target.value })}
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
            value="Ja, aber mit Unterstützung"
            checked={moderator === "Ja, aber mit Unterstützung"}
            onChange={(e) => updateGroupFields({ moderator: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption3"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Nein</div>
          <input
            type="radio"
            id="radioOption3"
            name="options"
            value="option3"
            checked={moderator === "Nein"}
            onChange={handleNoModerator}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        {showMessage && (
          <div className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4">
            Wir werden Ihnen eine E-Mail senden{" "}
          </div>
        )}
      </div>
    </div>
  );
}
