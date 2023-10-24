import React, { useState } from "react";

export default function GroupInfoForm({
  name,
  description,
  updateGroupFields,
}) {
  const [text, setText] = useState("");
  const maxCharacters = 200;
  const [groupImage, setGroupImage] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    updateGroupFields({ description: e.target.value });
    if (inputText.length <= maxCharacters) {
      setText(inputText);
    }
  };

  const handleGroupImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setGroupImage(reader.result);
        updateGroupFields(reader.result);
        console.log("Groupinfo", groupImage);
      };
    }
  };

  return (
    <div>
      <h2 className="">Beschreibe Deine Gruppe</h2>
      <p className=" text-textLightGray">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </p>
      <h4 className=" mt-4">Wie soll deine Gruppe heißen?</h4>
      <div className="mt-2 text-sm border border-primaryblue rounded-md">
        <input
          required
          type="text"
          name="username"
          value={name}
          onChange={(e) => updateGroupFields({ name: e.target.value })}
          className="w-full border rounded-md p-2 placeholder-primaryText"
          placeholder="Name"
          pattern=".{3,}"
          title="Bitte geben Sie mindestens drei Zeichen ein"
        />
      </div>
      <p className=" px-1 text-textLightGray">Min 3 Zeichen.</p>

      <h4 className=" mt-4">Wie würdest du deine Gruppe beschreiben?</h4>
      <div className="mt-2 text-smrounded-md">
        <textarea
          required
          name="username"
          value={description}
          onChange={handleChange}
          className="w-full border border-primaryblue rounded-md p-2 placeholder-primaryText h-20 resize-none text-sm"
          placeholder="Kurze Gruppenbeschreibung"
        ></textarea>
      </div>
      <div className="flex text-xs text-gray-500 mt-1 justify-end">
        {description.length}/{maxCharacters}
      </div>

      <p className="my-2">
        Lade ein Bild für die Gruppe hoch. Du kannst auch ein Bild aus unseren
        Vorschlägen aussuchen.{" "}
      </p>
      <div className="mb-4">
        <label className="relative cursor-pointer hover:bg-primaryblue-hover border border-primaryblue px-4 py-2 rounded-md text-sm">
          <span>Eigene Datei auswählen</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleGroupImage}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
