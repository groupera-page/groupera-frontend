import React from "react";
import TextInput from "../../UserInputs/TextInput";
import PrimaryButton from "../../Buttons/PrimaryButton";

export default function ProfileSubPage() {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col my-4">
        <h4>Deine Information</h4>
        <p className="text-TEXT_LIGHTGRAY">Ändere deine informationen hier</p>
      </div>
      <div className="flex flex-col md:w-1/4">
        <h5>Name</h5>
        <TextInput placeholder={"Username"} />
      </div>
      <div className="flex my-2 gap-2">
        <PrimaryButton isInversed={true}>Abbrechen</PrimaryButton>
        <PrimaryButton>Speichern</PrimaryButton>
      </div>
      <hr className="border my-4" />
      <div className="flex flex-col md:w-1/4">
        <h5>Passwort</h5>
        <p className="text-TEXT_LIGHTGRAY">
          Hier kannst du dein Password ändern
        </p>
      </div>
      <div className="flex my-2 gap-2">
        <PrimaryButton isInversed={true}>Passwort ändern</PrimaryButton>
      </div>
      <hr className="border my-4" />
      <div className="flex flex-col md:w-1/4">
        <h5>Achtung!</h5>
        <p className="text-TEXT_LIGHTGRAY">
          Dieser Prozess kann nicht rückgängig gemacht werden.
        </p>
      </div>
      <div className="flex my-2 gap-2">
        <PrimaryButton isInversed={true}>Meinen Account löschen</PrimaryButton>
      </div>
      <hr className="border my-4" />
    </div>
  );
}
