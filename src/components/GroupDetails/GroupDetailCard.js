import React from "react";
import GroupOverviewContent from "./GroupOverviewContent";
import MenuDropDown from "../Navigation/Menus/MenuDropDown";
import PrimaryButton from "../Buttons/PrimaryButton";
import {Link} from "react-router-dom";
import LazyLoadImg from "../LazyLoadImg";

const GroupDetailCard = ({ group, isAdmin, isMember }) => {
  return (
    <div className="my-2 lg:flex gap-12 lg:mx-0">
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
                <PrimaryButton>{`Mitglied werden`}</PrimaryButton>
              ) : (
                <MenuDropDown
                  title={`${isAdmin ? "Du bist Admin" : "Du bist Mitglied"}`}
                  topOffset={10}
                  isButtonDropDown={true}
                >
                  <Link
                    to={`${
                      isAdmin
                        ? `/groups/${group.id}/edit`
                        : "/groups"
                    }`}
                  >
                    <li className="">
                      <PrimaryButton isInversed={true}>
                        {`${
                          isAdmin ? "Gruppe bearbeiten" : "Gruppe verlassen"
                        }`}
                      </PrimaryButton>
                    </li>
                  </Link>
                </MenuDropDown>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

export default GroupDetailCard;