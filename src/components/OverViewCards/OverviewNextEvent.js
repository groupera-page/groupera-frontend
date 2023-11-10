import React from "react";
import OverviewHeader from "./OverviewHeader";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default function OverviewNextEvent({ mockData, hasEvents = true }) {
  return (
    <div className="lg:w-1/2">
      <div
        className={`flex ${
          hasEvents ? "flex-row" : "flex-col"
        } rounded-md shadow-md mt-4 justify-between`}
      >
        <div className="flex flex-col p-2 ">
          <OverviewHeader
            title={hasEvents ? "Deine nächsten Termine" : "Deine Termine"}
            text={
              hasEvents
                ? ""
                : "Du hast dich noch für keinen Termin angemeldet. "
            }
          />
          {!hasEvents && (
            <div className="flex justify-center my-2">
              <PrimaryButton>Zur den Gruppen</PrimaryButton>
            </div>
          )}
          {hasEvents && (
            <div className="flex flex-col justify-center gap-1 mx-2">
              <div className="flex flex-col gap-1 mb-4">
                <p className="font-medium">{mockData.groups[0].name}</p>
                <p className="mb-2">{mockData.groups[0].nextEventTime}</p>
              </div>
            </div>
          )}
        </div>

        {hasEvents && (
          <div className="flex flex-col justify-center gap-5 mr-4">
            <SecondaryButton>Abmelden</SecondaryButton>
            <PrimaryButton>Zur Videokonferenz</PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
}
