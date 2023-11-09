import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
export default function OverviewGroupItems({ groups }) {
  return (
    <div className="mx-2 flex-col ">
      {groups.map((group, index) => (
        <div key={index}>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1 mb-4  ">
              <h5>{group.name}</h5>
              <p className="text-TEXT_LIGHTGRAY">Nächster Termin</p>
              <p className="mb-2">{group.nextEventTime}</p>
            </div>
            <div className="flex h-1/2 justify-center">
              <SecondaryButton>Zur Gruppe</SecondaryButton>
            </div>
          </div>
          <hr className="border-t border-gray-300" />
        </div>
      ))}
    </div>
  );
}
