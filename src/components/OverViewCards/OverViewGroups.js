import React from "react";
import OverViewHeader from "./OverViewHeader";
import OverViewGroupItems from "./OverViewGroupItems";
import PrimaryButton from "../Buttons/PrimaryButton";

// Replace
const mockData = {
  groups: [
    {
      name: "Depression",
      nextEventTime: "2023-11-15T18:00:00",
    },
    {
      name: "Angst",
      nextEventTime: "2023-11-20T15:30:00",
    },
  ],
};

export default function OverViewGroups() {
  return (
    <div className="flex flex-col p-5 rounded-md shadow-md gap-2">
      <OverViewHeader
        title={"Deine Gruppen"}
        text={
          "Über die Gruppen kannst du dich für die nächsten Termine anmelden."
        }
      />
      <OverViewGroupItems groups={mockData.groups} />
      <div className="flex flex-col items-center my-2">
        <div className="items-center ">
          <PrimaryButton>Gruppen Finden</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
