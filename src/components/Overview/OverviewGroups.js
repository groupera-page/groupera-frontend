import React from "react";
import OverviewHeader from "./OverviewHeader";
import OverviewGroupItems from "./OverviewGroupItems";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";

export default function OverviewGroups({ groups }) {
  return (
    <div className="flex flex-col lg:p-2 rounded-md shadow-md border lg:w-1/2 mt-5 lg:mt-10 lg:mr-8">
      <OverviewHeader
        title={"Deine Gruppen"}
        text={
          groups.length > 0
            ? "Über die Gruppen kannst du dich für die nächsten Termine anmelden."
            : "Du bist noch keiner Gruppe beigetreten. "
        }
      />
      {groups.length > 0 && <OverviewGroupItems groups={groups} />}
      <div className="flex flex-col items-center my-4 ">
        <Link to={`/groups`}>
          <PrimaryButton> Gruppen finden</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
