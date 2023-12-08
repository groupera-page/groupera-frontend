import React from "react";
import GroupOverviewContent from "./GroupOverviewContent";
import GroupEditContent from "./GroupEditContent";
import MenuDropDown from "../Navigation/Menus/MenuDropDown";
import PrimaryButton from "../Buttons/PrimaryButton";
import placeholderImage from "../../assets/placeholderImage.jpg";
import { Link } from "react-router-dom";
// import GroupEditImage from "./GroupEditImage";

const GroupDetailCard = ({ group, isAdmin, isMember, isEditable }) => {
  return (
    <div className="my-2 lg:flex gap-12 lg:mx-0">
      <div className="flex lg:w-1/2 relative items-center">
        <img
          src={placeholderImage}
          alt="Placeholder"
          className="rounded-md object-cover filter blur-md"
        />
      </div>

      {/*{isEditable && (*/}
      {/*  <div className="lg:hidden">*/}
      {/*    <div className="paragraph-lg mt-4 mb-2 "> Gruppenbild ändern</div>*/}
      {/*    <GroupEditImage updatePreviewImage={updatePreviewImage} />*/}
      {/*  </div>*/}
      {/*)}*/}

      <div className="lg:w-1/2 my-4">
        {isEditable ? (
          <GroupEditContent group={group} />
        ) : (
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
        )}
        {/*{isEditable && (*/}
        {/*  <div className="hidden lg:block">*/}
        {/*    <div className="paragraph-lg mt-4 mb-2 "> Gruppenbild ändern</div>*/}
        {/*    <GroupEditImage updatePreviewImage={updatePreviewImage} />*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
}

export default GroupDetailCard;