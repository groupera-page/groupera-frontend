import React from "react";
import OverviewHeader from "./OverviewHeader";
import OverviewGroupItems from "./OverviewGroupItems";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";

export default function OverviewGroups({ groups }) {
  return (
    <div className="flex flex-col p-2 rounded-md shadow-md border gap-2 lg:w-1/2 mt-10">
      <OverviewHeader
        title={"Deine Gruppen"}
        text={
          groups.length > 0
            ? "Über die Gruppen kannst du dich für die nächsten Termine anmelden."
            : "Du bist noch keiner Gruppe beigetreten. "
        }
      />
      {groups.length > 0 && <OverviewGroupItems groups={groups} />}
      <div className="flex flex-col items-center my-2">
        <Link to={`/groups`}>
          <PrimaryButton> Gruppen finden</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
