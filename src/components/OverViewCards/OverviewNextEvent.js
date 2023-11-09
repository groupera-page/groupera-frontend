import React from "react";
import OverviewHeader from "./OverviewHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default function OverviewNextEvent({ mockData }) {
  return (
    <div className="flex rounded-md shadow-md mt-4">
      <div className="flex flex-col p-5  gap-2">
        <OverviewHeader title={"Deine nächsten Termine"} text={""} />
        <div className="flex justify-between items-center mx-2">
          <div className="flex flex-col gap-1 mb-4  ">
            <h5>{mockData.groups[0].name}</h5>
            <p className="mb-2">{mockData.groups[0].nextEventTime}</p>
          </div>
          <hr className="border-t border-gray-300" />
        </div>

        <div className="flex flex-col items-center my-2">
          <div className="items-center "></div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 ">
        <SecondaryButton>Abmelden</SecondaryButton>
        <PrimaryButton>Zu den Gruppen</PrimaryButton>
      </div>
    </div>
  );
}
