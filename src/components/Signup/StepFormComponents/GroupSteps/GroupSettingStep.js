import { useState } from "react";
import RadioButton from "../../../UserInputs/RadioButton";
import StepHeader from "../StepHeader";

export default function GroupSettingStep({ moderator, updateGroupFields }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleNoModerator = (e) => {
    setShowMessage(true);
    updateGroupFields({ moderator: e.target.value });
  };

  return (
    <div className="">
      <StepHeader
        title={"Pass die Einstellungen deiner Gruppe an."}
        text={
          " Du kannst diese Einstellung jederzeit in den Gruppeneinstellungen ändern."
        }
      />

      <div className="paragraph-lg mt-4">
        Möchtest du Deine Gruppe selbst moderieren?
      </div>
      <div className="flex flex-col gap-4 mb-4">
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
