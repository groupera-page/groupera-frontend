import React, { useState, useEffect } from "react";
import Searchbox from "../UserInputs/Searchbox";
import GroupTopicFilter from "./GroupTopicFilter";
import { useDispatch } from "react-redux";
import { setGroupSearch } from "../../mockDataSlice";

const GroupSearchContainer = (searchTerm, handleSearch) => {
  return (
    <div className="w-full mt-4">
      <Searchbox
        placeholderText={"Gib hier deine Suche ein..."}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <GroupTopicFilter />
    </div>
  );
}

export default GroupSearchContainer
