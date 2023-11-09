import React from "react";
import OverviewHeader from "./OverviewHeader";
import OverviewGroupItems from "./OverviewGroupItems";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function OverviewGroups({ mockData, hasGroups = true }) {
  return (
    <div className="flex flex-col p-2 rounded-md shadow-md gap-2">
      <OverviewHeader
        title={"Deine Gruppen"}
        text={
          hasGroups
            ? "Über die Gruppen kannst du dich für die nächsten Termine anmelden."
            : "Du bist noch keiner Gruppe beigetreten. "
        }
      />
      {hasGroups && <OverviewGroupItems groups={mockData.groups} />}
      <div className="flex flex-col items-center my-2">
        <PrimaryButton>Gruppen Finden</PrimaryButton>
      </div>
    </div>
  );
}
