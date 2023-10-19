import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function GroupInfoForm({ updateFields }) {
  const [text, setText] = useState("");
  const maxCharacters = 200;
  const [groupImage, setGroupImage] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;

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
      };
    }
  };

  return (
    <div>
      <h2 className=" mt-8">Beschreibe Deine Gruppe</h2>
      <p className=" my-4">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </p>
      <h4 className=" mt-8">Wie soll deine Gruppe heißen?</h4>
      <div className="mt-4 text-sm border border-primaryblue rounded-md">
        <input
          required
          type="text"
          name="username"
          // value={text}
          // onChange={(e) => updateFields({ username: e.target.value })}
          className="w-full border rounded-md p-2 placeholder-primaryText"
          placeholder="Name"
        />
      </div>
      <h4 className=" mt-8">Wie würdest du deine Gruppe beschreiben?</h4>
      <div className="mt-4 text-smrounded-md">
        <textarea
          required
          name="username"
          value={text}
          onChange={handleChange}
          className="w-full border border-primaryblue rounded-md p-2 placeholder-primaryText h-20 resize-none text-sm"
          placeholder="Kurze Gruppenbeschreibung"
        ></textarea>
      </div>
      <div className="flex text-xs text-gray-500 mt-1 justify-end">
        {text.length}/{maxCharacters}
      </div>

      <p className=" my-4">
        Lade ein Bild für die Gruppe hoch. Du kannst auch ein Bild aus unseren
        Vorschlägen aussuchen.{" "}
      </p>
      <div>
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
