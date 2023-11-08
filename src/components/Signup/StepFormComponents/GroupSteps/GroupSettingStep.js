import { useState } from "react";
import RadioButton from "../../../UserInputs/RadioButton";

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
      <div className="flex flex-col gap-4 my-4">
        <RadioButton
          id={"moderator1"}
          title={"Ja"}
          checkedVariable={moderator}
          onChange={(e) => {
            updateGroupFields({ moderator: e.target.value });
            setShowMessage(false);
          }}
        />
        <RadioButton
          id={"moderator2"}
          title={"Ja, aber mit Unterstützung"}
          checkedVariable={moderator}
          onChange={(e) => {
            updateGroupFields({ moderator: e.target.value });
            setShowMessage(false);
          }}
        />
        <RadioButton
          id={"moderator3"}
          title={"Nein"}
          checkedVariable={moderator}
          onChange={handleNoModerator}
        />

        {showMessage && (
          <div className="flex text- PURPLE_PRIMARY text-sm bg-BG_PRIMARY justify-center">
            Wir werden Ihnen eine E-Mail senden
          </div>
        )}
      </div>
    </div>
  );
}
