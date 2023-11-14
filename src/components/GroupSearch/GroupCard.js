import React from "react";
import placeholderForest from "../../assets/placeholderForest.jpg";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function GroupCard({
  title = "Groupname",
  eventTime = "Wöchentlich, Montags 16:00 Uhr",
  text = "Gemeinsam gegen Depressionen. Offene Unterstützung. Erfahrungen teilen. Heilung finden. Zusammen stark. ",
  members = 17,
}) {
  return (
    <div className="flex flex-col border rounded-md shadow-md h-full">
      <div className="w-full h-64">
        <img
          src={placeholderForest}
          alt="Placeholder"
          className="rounded-tr-md w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-4 flex-1">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-row justify-between items-center">
            <h4> {title}</h4>
            <p className="text-TEXT_LIGHTGRAY"> {members} Mitglieder</p>
          </div>

          <p className="text-PURPLE_PRIMARY">{eventTime}</p>
          <p>{text}</p>
        </div>
        <div className="mt-4">
          <PrimaryButton type="button" isInversed>
            Mehr erfahren
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
