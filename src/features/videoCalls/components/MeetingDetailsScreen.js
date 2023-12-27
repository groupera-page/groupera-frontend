import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth} from "../../auth/authSlice";

export function MeetingDetailsScreen({
  onClickJoin,
}) {
  const {user} = useSelector(selectAuth)
  const {meetingId} = useParams()

  return (
    <div
      className={`flex flex-1 flex-col justify-center w-full md:p-[6px] sm:p-1 p-1.5`}
    >
      <input
        value={user?.alias}
        disabled
        placeholder="Enter your name"
        className="px-4 py-3 mt-5 bg-gray-650 rounded-xl text-white w-full text-center"
      />

      <p className="text-xs text-white mt-1 text-center">
        Dein alias wird verwendet um dich in dem Gruppentreffen zu erkennen.
      </p>
      <button
        className="w-full bg-purple-350 text-white px-2 py-3 rounded-xl mt-5"
        onClick={() => {
          if (meetingId.match("\\w{4}\\-\\w{4}\\-\\w{4}")) {
            onClickJoin(meetingId);
          } else alert("Ungültige Meeting Id")
        }}
      >
        Gruppentreffen beitreten
      </button>
    </div>
  );
}
