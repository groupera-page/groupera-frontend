import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function ExperienceForm({ experience, updateFields }) {
  return (
    <div className="">
      <h2 className="my-2">
        Hast Du bereist Erfahrung mit Selbsthilfegruppen?
      </h2>
      <p>Wähle eine der folgenden Optionen.</p>
      <div className="flex flex-col gap-4 my-4 ">
        <label
          htmlFor="radioOption1"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-sm p-2 pl-4 flex items-center gap-4"
        >
          <div>Nein, ich hab noch nie an einer Gruppe teilgenommen.</div>
          <input
            type="radio"
            id="radioOption1"
            name="options"
            value="option1"
            checked={experience === "option1"}
            onChange={(e) => updateFields({ experience: e.target.value })}
            className="mr-2 absolute end-16"
          />
        </label>
        <label
          htmlFor="radioOption2"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-sm p-2 pl-4 flex items-center gap-4"
        >
          <div> Ein wenig, ich habe schonmal an einer Gruppe teilgenommen.</div>
          <input
            type="radio"
            id="radioOption2"
            name="options"
            value="option2"
            checked={experience === "option2"}
            onChange={(e) => updateFields({ experience: e.target.value })}
            className="mr-2 absolute end-16"
          />
        </label>
        <label
          htmlFor="radioOption3"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-sm p-2 pl-4 flex items-center gap-4"
        >
          <div> Ja, ich habe regelmäßig an Gruppen teilgenommen.</div>
          <input
            type="radio"
            id="radioOption3"
            name="options"
            value="option3"
            checked={experience === "option3"}
            onChange={(e) => updateFields({ experience: e.target.value })}
            className="mr-2 absolute end-16"
          />
        </label>
        <label
          htmlFor="radioOption4"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-sm p-2 pl-4 flex items-center gap-4"
        >
          <div> Ja, ich habe regelmäßig an Gruppen teilgenommen.</div>
          <input
            type="radio"
            id="radioOption4"
            name="options"
            value="option4"
            checked={experience === "option4"}
            onChange={(e) => updateFields({ experience: e.target.value })}
            className="mr-2 absolute end-16"
          />
        </label>
      </div>

      {/* Rest of your form elements */}
    </div>
  );
}
