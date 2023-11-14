import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
export default function OverviewGroupItems({ groups }) {
  return (
    <div className="mx-2 flex-col ">
      {groups.map((group, index) => (
        <div key={index}>
          <div className="flex justify-between items-center my-4">
            <div className="flex flex-col justify-center gap-1 ">
              <p className="font-medium">{group.name}</p>
              <p className="text-TEXT_LIGHTGRAY">Nächster Termin</p>
              <p className="">{group.nextEventTime}</p>
            </div>
            <div className="">
              <SecondaryButton>Zur Gruppe</SecondaryButton>
            </div>
          </div>
          <hr className="border-t border-gray-300" />
        </div>
      ))}
    </div>
  );
}
