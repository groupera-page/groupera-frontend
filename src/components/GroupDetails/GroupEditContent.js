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
    <div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h5> Name Der Gruppe</h5>
          <TextInput value={groupNameValue} onChange={handleGroupNameChange} />
        </div>
        <div className="flex flex-col gap-2 h-full">
          <h5> Beschreibung der Gruppe</h5>
          <TextAreaInput
            value={groupDescriptionValue}
            onChange={handleGroupDescriptionChange}
          />
        </div>
      </div>
    </div>
  );
}
