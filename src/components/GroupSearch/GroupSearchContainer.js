import React, { useState } from "react";
import Searchbox from "../UserInputs/Searchbox";
import GroupThemeFilter from "./GroupThemeFilter";
import { useDispatch } from "react-redux";
import { setGroupSearch } from "../../mockDataSlice";

export default function GroupSearchContainer() {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  dispatch(setGroupSearch(inputValue));

  return (
    <div className="w-full">
      <Searchbox
        placeholderText={"Gib hier deine Suche ein..."}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <GroupThemeFilter />
    </div>
  );
}
