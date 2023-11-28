import React, { useState, useEffect } from "react";
import Searchbox from "../UserInputs/Searchbox";
import GroupTopicFilter from "./GroupTopicFilter";
import { useSelector, useDispatch } from "react-redux";
import { setGroupSearch } from "../../mockDataSlice";

export default function GroupSearchContainer() {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  const mockData = useSelector((state) => state.mockData.mockData);

  useEffect(() => {
    dispatch(setGroupSearch(inputValue));
  }, [inputValue, dispatch]);

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
