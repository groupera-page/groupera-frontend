import { useState } from "react";
import TextInput from "../UserInputs/TextInput";
import TextAreaInput from "../UserInputs/TextAreaInput";

export default function GroupeditContent({ group }) {
  const [groupNameValue, setGroupNameValue] = useState(group.name);
  const [groupDescriptionValue, setGroupDescriptionValue] = useState(
    group.description
  );
  const handleGroupNameChange = (event) => {
    setGroupNameValue(event.target.value);
  };

  const handleGroupDescriptionChange = (event) => {
    setGroupDescriptionValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="paragraph-lg"> Name Der Gruppe</div>
        <TextInput value={groupNameValue} onChange={handleGroupNameChange} />
      </div>
      <div className="flex flex-col gap-2 h-full">
        <div className="paragraph-lg"> Beschreibung der Gruppe</div>
        <TextAreaInput
          value={groupDescriptionValue}
          onChange={handleGroupDescriptionChange}
          maxLength={500}
        />
        <div className="flex text-xs text-gray-500 justify-end">
          Characters
          {/* {description.length}/{maxCharacters} */}
        </div>
      </div>
    </div>
  );
}
