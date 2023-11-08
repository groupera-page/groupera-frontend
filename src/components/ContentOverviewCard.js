import React from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
export default function ContentOverviewCard({
  title = "Deine Gruppen",
  text = "Du bist noch keiner Gruppe beigetreten. ",
}) {
  return (
    <div className="flex flex-col p-5 rounded-md shadow-md gap-2">
      <div className="m-2 ">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
      <div className="flex flex-col   items-center">
        <div className="items-center ">
          <PrimaryButton>Gruppe finden</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
