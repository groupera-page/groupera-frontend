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
        title={"Moderation der Gruppe"}
        text={" Du kannst uns jederzeit kontaktieren und Hilfe bekommen."}
      />

      <div className="paragraph-lg mt-4">
        Möchtest du Deine Gruppe selbst moderieren?
      </div>
      <div className="flex flex-col gap-4 ">
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
          onChange={handleNoModerator}
        />
        <RadioButton
          id={"moderator3"}
          title={"Nein"}
          checkedVariable={moderator}
          onChange={(e) => {
            updateGroupFields({ moderator: e.target.value });
            setShowMessage(false);
          }}
        />

        {
          <div
            className={`flex PURPLE_PRIMARY text-sm bg-BG_PRIMARY justify-center ${
              showMessage ? "opacity-100" : "opacity-0"
            }`}
          >
            Wir werden Dir eine E-mail senden zum weiteren Vorgehen.
          </div>
        }
      </div>
    </div>
  );
}
