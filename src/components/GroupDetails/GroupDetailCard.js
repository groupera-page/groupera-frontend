import React, { useState } from "react";
import GroupOverviewContent from "./GroupOverviewContent";
import GroupEditContent from "./GroupEditContent";
import MenuDropDown from "../Navigation/Menus/MenuDropDown";
import PrimaryButton from "../Buttons/PrimaryButton";
import placeholderImage from "../../assets/placeholderImage.jpg";
import { Link } from "react-router-dom";
// import GroupEditImage from "./GroupEditImage";

export default function GroupDetailCard({ group, isAdmin, isEditable }) {
  return (
    <div className="my-2 lg:flex gap-12 md:mx-20 lg:mx-0">
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
              <MenuDropDown
                title={`${isAdmin ? "Du bist Admin" : "Du bist Mitglied"}`}
                topOffset={10}
                isButtonDropDown={true}
              >
                <Link to={`/groups/${group.id}/edit`}>
                  <li className="">
                    <PrimaryButton isInversed={true}>
                      {`${isAdmin ? "Gruppe bearbeiten" : "Gruppe Verlassen"}`}
                    </PrimaryButton>
                  </li>
                </Link>
              </MenuDropDown>
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
