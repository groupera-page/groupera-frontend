import React from "react";

export default function GroupMemberSubPage({ group }) {
  return (
    <div className="mt-8">
      {group.users.map((member, id) => (
        <div className="flex bg-BG_GRAY py-2 justify-center" key={id}>
          <div className="w-full border-b border-TEXT_GRAY">
            <div className="flex justify-between items-center mb-4 ">
              <div className="flex items-center">
                <div className="flex justify-center items-center bg-BLUE_PRIMARY h-10 w-10 p-2 rounded-md mx-4 text-BG_PRIMARY">
                  {member.at(0)}
                </div>
                <p className="paragraph-md text-black font-semibold">
                  {" "}
                  {member}
                </p>
              </div>
              <p className="paragraph-md text-PURPLE_PRIMARY mr-12">Admin?</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
