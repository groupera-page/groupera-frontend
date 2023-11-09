import React from "react";
import OverviewHeader from "./OverviewHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default function OverviewNextEvent({ mockData }) {
  return (
    <div className="flex rounded-md shadow-md mt-4 justify-between">
      <div className="flex flex-col p-2 ">
        <OverviewHeader title={"Deine nächsten Termine"} text={""} />
        <div className="flex flex-col justify-center gap-1 mx-2">
          <div className="flex flex-col gap-1 mb-4">
            <p className="font-medium">{mockData.groups[0].name}</p>
            <p className="mb-2">{mockData.groups[0].nextEventTime}</p>
          </div>
        </div>

        <div className="flex flex-col items-center my-2">
          <div className="items-center "></div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 mr-4">
        <SecondaryButton>Abmelden</SecondaryButton>
        <PrimaryButton>Zur Videokonferenz</PrimaryButton>
      </div>
    </div>
  );
}
