import React, { useState } from "react";
import RadioButtonContainer from "../../../UserInputs/RadioButtonContainer";
import { GoShare } from "react-icons/go";

export default function GroupFinishStep({ updateGroupFields }) {
  const [emailOption, setEmailOption] = useState("Ja");
  const [isCopied, setIsCopied] = useState(false);
  const emailOptions = ["Ja", "Nein"];

  function onHandleEmailChange(option) {
    setEmailOption(option);
  }

  function copyToClipboard() {
    const textToCopy = "https://groupera.de"; // Replace with your actual group link
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Link copied to clipboard:", textToCopy);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000); // Reset isCopied after 3 seconds
      })
      .catch((error) => {
        console.error("Failed to copy link to clipboard:", error);
        // Handle the error or provide user feedback
      });
  }

  return (
    <div>
      <h6 className="mb-4">
        Super, deine Gruppe ist eröffnet. Bringe jetzt Menschen zusammen!
      </h6>

      <p className="paragraph-md text-TEXT_LIGHTGRAY mt-4">
        Du kannst den Link kopieren und mit Bekannten und Freunden teilen.
      </p>
      <div className="bg-BG_PRIMARY ">
        <div
          className="flex flex-row items-center justify-center cursor-pointer border border-TEXT_LIGHTGRAY rounded-md text-base p-2 items-center hover:shadow-md"
          onClick={copyToClipboard}
        >
          <GoShare className=" text-PURPLE_PRIMARY" size={32} />
        </div>
      </div>

      <div className="flex justify-center mt-1 text-sm opacity-75 text-PURPLE_PRIMARY">
        <div
          className={`flex transition-opacity ${
            isCopied ? "opacity-100" : "opacity-0"
          }`}
        >
          Link erfolgreich kopiert!
        </div>
      </div>

      <p className="paragraph-md text-TEXT_PRIMARY mt-2">
        Sollen wir deine Gruppe im nächsten Groupera Newsletter erwähnen?
      </p>

      <div className="mb-4">
        <RadioButtonContainer
          options={emailOptions}
          onChange={onHandleEmailChange}
          checkedVariable={emailOption}
          name={"emailOptions"}
        />
      </div>
    </div>
  );
}
