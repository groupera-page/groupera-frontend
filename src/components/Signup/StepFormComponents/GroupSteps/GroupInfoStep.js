import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";
import axios from "axios";
import TextInput from "../../../UserInputs/TextInput";
import InputError from "../../../UserInputs/InputError";
import TextAreaInput from "../../../UserInputs/TextAreaInput";

export default function GroupInfoStep({
  name,
  description,
  updateGroupFields,
  img,
  errorGroupName,
  errorGroupDescription,
}) {
  const maxCharacters = 500;
  const [groupNames, setGroupNames] = useState([]);
  const [nameError, setNameError] = useState("");

  const handleChange = (e) => {
    updateGroupFields({ description: e.target.value });
  };
  const imageData = [
    "Grouptitel%20pictures/pexels-akil-mazumder-1072824_1_tdw8si.jpg",
    "Grouptitel%20pictures/pexels-ghida-basma-609749_yy95mt.jpg",
    "Grouptitel%20pictures/pexels-pixabay-326235_juvylz.jpg",
    "Grouptitel%20pictures/pexels-pixabay-273886_dygqro.jpg",
    "Grouptitel%20pictures/pexels-johannes-plenio-1690355_bj811s.jpg",
    "Grouptitel%20pictures/pexels-nandhu-kumar-1661296_ttr2gf.jpg",
    "Grouptitel%20pictures/pexels-javier-gonzalez-108303_iwxfil.jpg",
    "Grouptitel%20pictures/pexels-taylor-hunt-2902440_xvgnuq.jpg",
    "Grouptitel%20pictures/pexels-eberhard-grossgasteiger-6_abiqd5.jpg",
    "Grouptitel%20pictures/pexels-pixabay-416117_hz1ccg.jpg",
  ];
  const isGroupNameExists = (name) => {
    return groupNames.includes(name);
  };
  useEffect(() => {
    updateGroupFields({ errorGroupName: "" });
    updateGroupFields({ errorGroupDescription: "" });
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5005/group/groups`);
        // console.log(response);
        const names = response.data.map((group) => group.name);
        setGroupNames(names);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="">Beschreibe Deine Gruppe</h2>
      <p className=" text-textLightGray">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </p>
      <h4 className=" mt-4">Wie soll deine Gruppe heißen?</h4>
      <div className="">
        <div className="mt-2 text-sm border-0 rounded-md">
          <TextInput
            value={name}
            onChange={(e) => {
              const newName = e.target.value;
              if (isGroupNameExists(newName)) {
                setNameError("Gruppenname existiert bereits.");
                updateGroupFields({ name: newName });
                updateGroupFields({ preventNext: true });
                updateGroupFields({ errorGroupName: "Group exists" });
              } else {
                setNameError("");
                updateGroupFields({ name: newName });
                updateGroupFields({ preventNext: false });
              }
            }}
            placeholder="Name"
            maxLength={70}
          />
          <InputError
            showMessage={errorGroupName && name.length < 3}
            errorMessage={"Min 3 Zeichen bitte"}
          />
          <InputError
            showMessage={nameError && name.length > 3}
            errorMessage={nameError}
          />
        </div>
        <p className="px-1 text-textLightGray">Min 3 Zeichen.</p>
      </div>
      <h4 className=" mt-4">Wie würdest du deine Gruppe beschreiben?</h4>
      <div className="mt-2 text-sm rounded-md">
        <TextAreaInput
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Kurze Gruppenbeschreibung"
          maxLength={500}
        />
      </div>
      <InputError
        showMessage={errorGroupDescription && description.length < 3}
        errorMessage={errorGroupDescription}
      />
      <div className="flex text-xs text-gray-500 justify-end">
        {description.length}/{maxCharacters}
      </div>
      <p className="my-2">
        Du kannst ein Bild aus unseren Vorschlägen aussuchen.{" "}
      </p>
      <Carousel
        imageData={imageData}
        img={img}
        updateGroupFields={updateGroupFields}
      />
    </div>
  );
}
