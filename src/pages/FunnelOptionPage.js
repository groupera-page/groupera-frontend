import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/hands4.jpg";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import { BsArrowRight } from "react-icons/bs";

const options = [
  {
    title: "Ich möchte an einer Selbsthilfegruppe teilnehmen.",
    value: 1,
  },
  {
    title: "Ich möchte eine Selbsthilfegruppe eröffnen.",
    value: 2,
  },
];

export default function Funnel2OptionPage() {
  const [funnelChoice, setFunnelChoice] = useState(1);
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="lg:sticky w-full h-full  lg:w-1/2 lg:h-5/6 overflow-y-scroll
      px-4 rounded md:shadow-md bg-primaryBg md:p-8 "
      >
        <div className="pb-3">
          <img src={logoSvg} alt="logo" className="lg:w-40 w-28 p-2 pt-3" />
        </div>
        <h2 className="mb-4">Was trifft am ehesten auf Dich zu?</h2>
        <p>Wähle eine der folgenden Optionen.</p>
        <div className="flex flex-col gap-4 my-2">
          {options.map((option) => (
            <label
              key={option.value}
              htmlFor={`radioOption${option.value}`}
              className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
            >
              <div>{option.title}</div>
              <input
                type="radio"
                id={`radioOption${option.value}`}
                name="options"
                value={option.value}
                checked={funnelChoice === option.value}
                onChange={(e) => {
                  setFunnelChoice(option.value);
                  console.log("Change");
                  console.log(funnelChoice);
                }}
                className="mr-1 absolute end-1 md:end-0 lg:end-16"
              />
            </label>
          ))}
        </div>
        <div className="flex gap-4 justify-end my-5">
          <button
            type="submit"
            onClick={(e) => {
              funnelChoice === 1
                ? navigate("/registration-option-join")
                : navigate("/registration-option-create");
            }}
            className={`text-slate-100 hover:text-white  bg-primarypurple hover-bg-primarypurple-hover px-4 py-1 rounded-lg`}
          >
            <div className="flex items-center">
              Weiter
              <BsArrowRight className="w-5 ml-3 text-primarybg" size={32} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
