import React from "react";
import OverviewHeader from "./OverviewHeader";
import OverviewGroupItems from "./OverviewGroupItems";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function OverviewGroups({ mockData }) {
  return (
    <div className="flex flex-col p-2 rounded-md shadow-md gap-2">
      <OverviewHeader
        title={"Deine Gruppen"}
        text={
          "Über die Gruppen kannst du dich für die nächsten Termine anmelden."
        }
      />
      <OverviewGroupItems groups={mockData.groups} />
      <div className="flex flex-col items-center my-2">
        <div className="items-center ">
          <PrimaryButton>Gruppen Finden</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
