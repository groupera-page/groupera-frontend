import React, { useState } from "react";
import Carousel from "../../../Carousels/Carousel";
import TextInput from "../../../UserInputs/TextInput";
import InputError from "../../../UserInputs/InputError";
import TextAreaInput from "../../../UserInputs/TextAreaInput";
import { useSelector } from "react-redux";
import StepHeader from "../StepHeader";

export default function GroupInfoStep({
  name,
  description,
  updateGroupFields,
  img,
  // errorGroupName,
  errorGroupDescription,
}) {
  const images = useSelector((state) => state.mockData.mockData.imageData);

  const maxCharacters = 500;
  // const [groupNames, setGroupNames] = useState([]);
  // const [nameError, setNameError] = useState("");

  const handleChange = (e) => {
    updateGroupFields({ description: e.target.value });
  };

  const handleNameChange = (e) => {
    updateGroupFields({ name: e.target.value });
  };

  return (
    <div>
      <StepHeader
        title={"Beschreibe Deine Gruppe"}
        text={
          " Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern"
        }
      />

      <div className="paragraph-lg mt-4">Wie soll deine Gruppe heißen?</div>
      <div className="">
        <div className=" text-sm border-0 rounded-md">
          <TextInput
            value={name}
            onChange={handleNameChange}
            // onChange={(e) => {
            // const newName = e.target.value;
            // if (isGroupNameExists(newName)) {
            //   setNameError("Gruppenname existiert bereits.");
            //   updateGroupFields({ name: newName });
            //   updateGroupFields({ preventNext: true });
            //   updateGroupFields({ errorGroupName: "Group exists" });
            // } else {
            //   setNameError("");
            //   updateGroupFields({ name: newName });
            //   updateGroupFields({ preventNext: false });
            // }
            // }}
            placeholder="Name"
            maxLength={70}
          />
          {/* <InputError
            showMessage={errorGroupName && name.length < 3}
            errorMessage={"Min 3 Zeichen bitte"}
          />
          <InputError
            showMessage={nameError && name.length > 3}
            errorMessage={nameError}
          /> */}
        </div>
        <p className="px-1 text-TEXT_LIGHTGRAY">Min 3 Zeichen.</p>
      </div>
      <h4 className=" paragraph-lg mt-4">
        Wie würdest du deine Gruppe beschreiben?
      </h4>
      <div className=" text-sm rounded-md">
        <TextAreaInput
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Kurze Gruppenbeschreibung"
          maxLength={maxCharacters}
        />
      </div>
      <InputError
        showMessage={errorGroupDescription && description.length < 3}
        errorMessage={errorGroupDescription}
      />
      <div className="flex text-xs text-gray-500 justify-end">
        {description.length}/{maxCharacters}
      </div>
      <p className="paragraph-lg mt-2">
        Du kannst ein Titelbild für deine Gruppe aussuchen.{" "}
      </p>
      <div className="mb-4">
        <Carousel
          imageData={images}
          img={img}
          updateGroupFields={updateGroupFields}
        />
      </div>
    </div>
  );
}
