import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";
import axios from "axios";
import { AiOutlineWarning } from "react-icons/ai";

export default function GroupInfoForm({
  name,
  description,
  updateGroupFields,
  img,
  preventNext,
}) {
  const maxNameCharacters = 70;
  const maxCharacters = 500;
  const [groupNames, setGroupNames] = useState([]);
  const [nameError, setNameError] = useState("");

  //const [groupImage, setGroupImage] = useState("");

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
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5005/group/groups`);
        const names = response.data.map((group) => group.name);
        setGroupNames(names);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []);

  // const handleGroupImage = (e) => {
  //   e.preventDefault();
  //   const file = e.target.files[0];
  //   TransformFile(file);
  // };

  // const TransformFile = (file) => {
  //   const reader = new FileReader();
  //   if (file) {
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       setGroupImage(reader.result);
  //       updateGroupFields(reader.result);
  //       console.log("Groupinfo", groupImage);
  //     };
  //   }
  // };

  return (
    <div>
      <h2 className="">Beschreibe Deine Gruppe</h2>
      <p className=" text-textLightGray">
        Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern
      </p>
      <h4 className=" mt-4">Wie soll deine Gruppe heißen?</h4>

      <div className="relative">
        <div className="mt-2 text-sm border-0 rounded-md relative">
          <input
            required
            type="text"
            name="username"
            value={name}
            onChange={(e) => {
              const newName = e.target.value;
              if (isGroupNameExists(newName)) {
                setNameError("Gruppenname existiert bereits.");
                updateGroupFields({ name: newName });
              } else {
                setNameError("");
                updateGroupFields({ name: newName });
              }
            }}
            className="w-full border rounded-md p-2 placeholder-primaryText bg-primaryBg border-primaryblue"
            placeholder="Name"
            pattern=".{3,}"
            title="Bitte geben Sie mindestens drei Zeichen ein"
            maxLength={maxNameCharacters}
          />
          {nameError && (
            <div className="absolute -bottom-12 left-1/3 transform -translate-x-1/2 rounded-md border-2">
              <div className="bg-white p-2 text-primarypurple text-sm">
                <div className="flex items-center">
                  {" "}
                  {/* Added 'items-center' to align content */}
                  <AiOutlineWarning
                    className="text-red text-primarybg"
                    size={32}
                  />
                  <span className="ml-2">{nameError}</span>{" "}
                  {/* Replaced 'div' with 'span' */}
                </div>
              </div>
            </div>
          )}
        </div>
        <p className="px-1 text-textLightGray">Min 3 Zeichen.</p>
      </div>

      <h4 className=" mt-4">Wie würdest du deine Gruppe beschreiben?</h4>
      <div className="mt-2 text-smrounded-md">
        <textarea
          required
          name="username"
          value={description}
          onChange={handleChange}
          className="w-full border border-primaryblue rounded-md p-2 placeholder-primaryText h-20 resize-none text-sm bg-primaryBg"
          placeholder="Kurze Gruppenbeschreibung"
          maxLength={maxCharacters}
        ></textarea>
      </div>
      <div className="flex text-xs text-gray-500 mt-1 justify-end">
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

      <div className="mb-4">
        {/* <label className="relative cursor-pointer hover:bg-primaryblue-hover border border-primaryblue px-4 py-2 rounded-md text-sm">
          <span>Eigene Datei auswählen</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleGroupImage}
            className="hidden"
          />
        </label> */}
      </div>
    </div>
  );
}
