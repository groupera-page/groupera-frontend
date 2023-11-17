import React from "react";

export default function GroupMemberSubPage({
  members = ["Marie", "Jan", "Rida"],
}) {
  return (
    <div>
      {members.map((member) => (
        <div className="flex my-2" key={member}>
          <div className="w-full">
            {member}
            <hr className=" border my-2 " />
          </div>
        </div>
      ))}
    </div>
  );
}
