import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextDetailContainer from "../GlobalLayout/TextDetailContainer";
import MenuDropDown from "../Navigation/Menus/MenuDropDown";
import PrimaryButton from "../Buttons/PrimaryButton";
import LazyLoadImg from "../LazyLoadImg";
import getFormattedDate from "../../util/formatMeetingDate";

import {
  deleteGroup,
  joinGroup,
  leaveGroup,
} from "../../features/groups/groupSlice";

const GroupDetailCard = ({ group, user, isAdmin, isMember }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleJoinGroup = () => {
    dispatch(joinGroup(group.id));
  };

  const handleLeaveGroup = () => {
    dispatch(leaveGroup({ groupId: group.id, memberId: user.id }));
  };

  const handleDeleteGroup = async () => {
    try {
      const response = await dispatch(deleteGroup(group.id));

      if (response.error) throw Error(response.error.message);

      navigate("/groups");
    } catch (e) {
      // handle the error response
      console.log(e);
    }
  };

  return (
    <div className="my-2 lg:flex gap-12 lg:mx-0 ">
      <div className="flex lg:w-1/2 relative items-center">
        <LazyLoadImg img={group.img} customStyling="rounded" />
      </div>
      <div className="lg:w-1/2 my-4">
        <TextDetailContainer
          title={group.name}
          clamp={false}
          subTitle={
            group.meetings && group.meetings.length > 0 ? (
              <>
                {group.meetings
                  .map((meeting) => getFormattedDate(meeting))
                  .join(" & ")}
              </>
            ) : (
              "Keine Treffen geplant"
            )
          }
          text={group.description}
          miniHeading={
            group.members &&
            group.members.length > 0 && (
              <>
                {`${group.members.length} ${
                  group.members.length === 1 ? "Mitglied" : "Mitglieder"
                }`}
              </>
            )
          }
        />

        {group.verified ? (
          <div className="flex justify-end pt-5">
            {!isMember && !isAdmin ? (
              <PrimaryButton
                handleButtonClick={handleJoinGroup}
                border={false}
              >{`Mitglied werden`}</PrimaryButton>
            ) : (
              <MenuDropDown
                title={`${isAdmin ? "Du bist Admin" : "Du bist Mitglied"}`}
                topOffset={10}
                isButtonDropDown={true}
              >
                <li className="">
                  <PrimaryButton
                    isInversed={true}
                    border={false}
                    handleButtonClick={
                      isAdmin
                        ? () => navigate(`/groups/${group.id}/edit`)
                        : handleLeaveGroup
                    }
                  >
                    {`${isAdmin ? "Gruppe bearbeiten" : "Gruppe verlassen"}`}
                  </PrimaryButton>
                </li>
                <hr className="border-l " />

                {isAdmin && (
                  <li className="">
                    <PrimaryButton
                      isInversed={true}
                      stretch={true}
                      handleButtonClick={handleDeleteGroup}
                      border={false}
                    >
                      Gruppe löschen
                    </PrimaryButton>
                  </li>
                )}
              </MenuDropDown>
            )}
          </div>
        ) : (
          isAdmin && (
            <div className="flex justify-end my-4">
              <PrimaryButton
                isInversed={true}
                stretch={true}
                handleButtonClick={handleDeleteGroup}
                border={false}
              >
                Gruppe löschen
              </PrimaryButton>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GroupDetailCard;
