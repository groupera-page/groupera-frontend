import React from "react";

const GroupMemberSubPage = ({ group }) => {
  if (!group.members || group.members.length === 0) {
    return (
      <div className="mt-6 mx-4 paragraph-md">Noch keine MitgliederInnen</div>
    );
  }

  return (
    <div className="mt-4">
      <div className="flex bg-BG_GRAY py-2 justify-center">
        <div className="w-full border-b border-TEXT_GRAY">
          <div className="flex justify-between items-center mb-4 ">
            <div className="flex items-center">
              <div className="flex justify-center items-center bg-BLUE_PRIMARY h-10 w-10 p-2 rounded-md mx-4 text-BG_PRIMARY">
                {group.moderator.alias.at(0)}
              </div>
              <p className="paragraph-md text-black font-semibold">
                {" "}
                {group.moderator.alias}
              </p>
            </div>
            <p className="paragraph-md text-PURPLE_PRIMARY mr-12">Moderator</p>
          </div>
        </div>
      </div>
      {group.members.map((member, id) => (
        <div className="flex bg-BG_GRAY py-2 justify-center" key={id}>
          <div className="w-full border-b border-TEXT_GRAY">
            <div className="flex justify-between items-center mb-4 ">
              <div className="flex items-center">
                <div className="flex justify-center items-center bg-BLUE_PRIMARY h-10 w-10 p-2 rounded-md mx-4 text-BG_PRIMARY">
                  {member.alias.at(0)}
                </div>
                <p className="paragraph-md text-black font-semibold">
                  {" "}
                  {member.alias}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupMemberSubPage;
