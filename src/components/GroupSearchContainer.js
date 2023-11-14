import React from "react";
import Searchbox from "../components/UserInputs/Searchbox";
import GroupThemeFilter from "../components/GroupThemeFilter";

export default function GroupSearchContainer() {
  return (
    <div className="w-full">
      <Searchbox placeholderText={"Gib hier deine Suche ein..."} />
      <GroupThemeFilter />
    </div>
  );
}
