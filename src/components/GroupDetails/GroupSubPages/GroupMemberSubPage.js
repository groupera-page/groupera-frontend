import React from "react";

export default function GroupMemberSubPage({ group }) {
  return (
    <div className="my-2">
      {group.users.map((member, id) => (
        <div className="flex  bg-BG_GRAY py-2 justify-center" key={id}>
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="flex justify-center items-center bg-BLUE_PRIMARY h-8 w-8 p-2 rounded-md mx-4 text-BG_PRIMARY">
                  {member.at(0)}
                </div>
                <p className="font-bold"> {member}</p>
              </div>
              {/* <p className="text-PURPLE_PRIMARY mr-12">Admin</p> */}
            </div>
            <hr className=" border " />
          </div>
        </div>
      ))}
    </div>
  );
}
