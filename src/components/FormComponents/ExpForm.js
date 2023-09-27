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
      <div className="my-4">
        <div className="space-y-4">
          <div className="border border-gray-300 p-4 rounded-lg flex items-center">
            <input
              type="radio"
              name="options"
              value="option1"
              checked={experience === "option1"}
              onChange={(e) => updateFields({ experience: e.target.value })}
              className="mr-2"
            />
            <label>Nein, ich hab noch nie an einer Gruppe teilgenommen.</label>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg flex items-center">
            <input
              type="radio"
              name="options"
              value="option2"
              checked={experience === "option2"}
              onChange={(e) => updateFields({ experience: e.target.value })}
              className="mr-2"
            />
            <label>
              Ein wenig, ich habe schonmal an einer Gruppe teilgenommen.
            </label>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg flex items-center">
            <input
              type="radio"
              name="options"
              value="option3"
              checked={experience === "option3"}
              onChange={(e) => updateFields({ experience: e.target.value })}
              className="mr-2"
            />
            <label>Ja, ich habe regelmäßig an Gruppen teilgenommen.</label>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg flex items-center">
            <input
              type="radio"
              name="options"
              value="option4"
              checked={experience === "option4"}
              onChange={(e) => updateFields({ experience: e.target.value })}
              className="mr-2"
            />
            <label>Ja, ich habe bereits Gruppen organisiert.</label>
          </div>
        </div>
      </div>

      {/* Rest of your form elements */}
    </div>
  );
}
