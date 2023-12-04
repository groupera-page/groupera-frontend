import React from "react";
import OverviewHeader from "./OverviewHeader";
import OverviewGroupItems from "./OverviewGroupItems";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";

export default function OverviewGroups({ groups }) {
  return (
    <div className="flex p-2 flex-col rounded-md shadow-md border lg:w-1/2 mt-6 lg:mt-20">
      <OverviewHeader
        title={"Deine Gruppen"}
        text={
          groups.length > 0
            ? "Über die Gruppen kannst du dich für die nächsten Termine anmelden."
            : "Du bist noch keiner Gruppe beigetreten. "
        }
      />
      {groups.length > 0 && <OverviewGroupItems groups={groups} />}
      <div className="flex flex-col items-center mt-4 mb-2 ">
        <Link to={`/groups`}>
          <PrimaryButton> Gruppen finden</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
