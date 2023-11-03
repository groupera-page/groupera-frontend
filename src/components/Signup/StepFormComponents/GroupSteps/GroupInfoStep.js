import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";
import axios from "axios";
import { AiOutlineWarning } from "react-icons/ai";

export default function GroupInfoStep({
  name,
  description,
  updateGroupFields,
  img,
  errorGroupName,
  errorGroupDescription,
}) {
  const maxNameCharacters = 70;
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
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => {
              const newName = e.target.value;
              if (isGroupNameExists(newName)) {
                console.log("EXISTS");
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
            className="w-full border rounded-md p-2 placeholder-primaryText bg-primaryBg border-primaryblue"
            placeholder="Name"
            maxLength={maxNameCharacters}
          />

          <div
            className={`transform rounded-md border-2 transition-all ease-in-out duration-300 ${
              errorGroupName && name.length < 3
                ? "translate-y-0 opacity-100 "
                : "-translate-y-2 opacity-0"
            }`}
          >
            {errorGroupName && name.length < 3 && (
              <div className="bg-white p-1 text-primarypurple text-sm">
                <div className="flex items-center">
                  <AiOutlineWarning
                    className="text-red text-primarybg "
                    size={32}
                  />
                  <span className="ml-2">{errorGroupName}</span>
                </div>
              </div>
            )}
          </div>
          <div
            className={`transform rounded-md transition-all ease-in-out duration-300 ${
              errorGroupName
                ? "translate-y-0 opacity-100 "
                : "-translate-y-2 opacity-0"
            }`}
          >
            {nameError && (
              <div className="bg-white p-1 text-primarypurple text-sm">
                <div className="flex items-center">
                  <AiOutlineWarning
                    className="text-red text-primarybg "
                    size={32}
                  />
                  <span className="ml-2">{errorGroupName}</span>
                </div>
              </div>
            )}
          </div>

          {/* {errorGroupName && name.length < 3 && (
            <div className=" -bottom-12 left-1/3 transform -translate-x-1/2 rounded-md border-2">
              <div className="bg-white p-1 text-primarypurple text-sm">
                <div className="flex items-center">
                  <AiOutlineWarning
                    className="text-red text-primarybg"
                    size={32}
                  />
                  <span className="ml-2">{errorGroupName}</span>{" "}
                </div>
              </div>
            </div>
          )} */}
        </div>
        <p className="px-1 text-textLightGray">Min 3 Zeichen.</p>
      </div>
      <h4 className=" mt-4">Wie würdest du deine Gruppe beschreiben?</h4>
      <div className="mt-2 text-sm rounded-md">
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          className="w-full border border-primaryblue rounded-md p-2 placeholder-primaryText h-20 resize-none text-sm bg-primaryBg"
          placeholder="Kurze Gruppenbeschreibung"
          maxLength={maxCharacters}
        ></textarea>
      </div>
      <div
        className={`transform rounded-md border-2 transition-all ease-in-out duration-300 ${
          errorGroupDescription && description.length < 3
            ? "-translate-y-2 opacity-100 "
            : "-translate-y-2 opacity-0"
        }`}
      >
        {errorGroupDescription && description.length < 3 && (
          <div className=" transform rounded-md ">
            <div className="bg-white p-1 text-primarypurple text-sm">
              <div className="flex items-center">
                <AiOutlineWarning
                  className="text-red text-primarybg"
                  size={32}
                />
                <span className="ml-2">{errorGroupDescription}</span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
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
