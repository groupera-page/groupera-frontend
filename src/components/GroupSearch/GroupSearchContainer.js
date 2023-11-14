import React from "react";
import Searchbox from "../UserInputs/Searchbox";
import GroupThemeFilter from "./GroupThemeFilter";

export default function GroupSearchContainer() {
  return (
    <div className="w-full">
      <Searchbox placeholderText={"Gib hier deine Suche ein..."} />
      <GroupThemeFilter />
    </div>
  );
}
