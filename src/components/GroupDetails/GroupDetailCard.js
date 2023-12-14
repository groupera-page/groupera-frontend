import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import GroupOverviewContent from "./GroupOverviewContent";
import MenuDropDown from "../Navigation/Menus/MenuDropDown";
import PrimaryButton from "../Buttons/PrimaryButton";
import LazyLoadImg from "../LazyLoadImg";

import {joinGroup, leaveGroup} from "../../features/groups/groupSlice";

const GroupDetailCard = ({ group, user, isAdmin, isMember }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleJoinGroup = () => {
    dispatch(joinGroup(group.id))
  }

  const handleLeaveGroup = () => {
    dispatch(leaveGroup({groupId: group.id, memberId: user.id}))
  }

  return (
    <div className="my-2 lg:flex gap-12 lg:mx-0 ">
      <div className="flex lg:w-1/2 relative items-center">
        <LazyLoadImg
          img={group.img}
        />
      </div>

      <div className="lg:w-1/2 my-4">
        <div>
            <GroupOverviewContent
              group={group}
              clamp={false}
              isDetailPage={true}
            />
            <div className="flex justify-end my-4">
              {!isMember && !isAdmin ? (
                <PrimaryButton handleButtonClick={handleJoinGroup}>{`Mitglied werden`}</PrimaryButton>
              ) : (
                <MenuDropDown
                  title={`${isAdmin ? "Du bist Admin" : "Du bist Mitglied"}`}
                  topOffset={10}
                  isButtonDropDown={true}
                >
                  <li className="">
                    <PrimaryButton isInversed={true} handleButtonClick={isAdmin ? () => navigate(`/groups/${group.id}/edit`) : handleLeaveGroup}>
                      {`${
                        isAdmin ? "Gruppe bearbeiten" : "Gruppe verlassen"
                      }`}
                    </PrimaryButton>
                  </li>
                  {
                    isAdmin &&
                    <li className="">
                      <PrimaryButton isInversed={true} handleButtonClick={isAdmin ? () => navigate(`/groups/${group.id}/edit`) : handleLeaveGroup}>
                        Gruppe löschen
                      </PrimaryButton>
                    </li>
                  }
                </MenuDropDown>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

export default GroupDetailCard;
