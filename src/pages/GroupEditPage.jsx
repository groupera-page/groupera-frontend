import React from "react";
import PageContainer from "../components/PageContainer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import GroupDetailCard from "../components/GroupDetails/GroupDetailCard";

export default function GroupEditPage() {
  const mockData = useSelector((state) => state.mockData.mockData);
  const mockDataGroups = mockData.groups;
  const user = mockData.user[0];
  const { slug } = useParams();
  const thisGroup = mockDataGroups.find((group) => group.id === slug);
  const isAdmin = user.moderatedGroups.find(
    (groupId) => thisGroup.id === groupId
  );

  return (
    <PageContainer>
      <div className="flex flex-col w-full">
        <div className="mb-4">
          <PrimaryButton isInversed={true}>
            <Link to={`/groups/${slug}/termine`}>
              <div className="flex items-center">
                <BsArrowLeft
                  className="w-5 mr-3 text-PURPLE_PRIMARY"
                  size={15}
                />
                Zurück zur Gruppe
              </div>
            </Link>
          </PrimaryButton>
        </div>

        <GroupDetailCard
          group={thisGroup}
          isAdmin={isAdmin}
          isEditable={true}
        />
        <div className="bg-BG_PRIMARY rounded-md border p-4 ">
          <ul className="flex justify-between items-center">
            <li>
              <ul className="flex gap-4 ">
                <li>Termin</li>
                <li>Termin</li>
                <li>Termin</li>
                <li>Termin</li>
                <li>Termin</li>
              </ul>
            </li>
            <li>
              <ul className="flex gap-4 ">
                <li>
                  <IoSettingsOutline size={22} />
                </li>
                <li>
                  <BsTrash3 size={22} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex justify-end my-4">
          <PrimaryButton>Termin hinzufügen</PrimaryButton>
        </div>
        <div className="flex gap-4">
          <PrimaryButton>speichern</PrimaryButton>
          <SecondaryButton>Gruppe löschen</SecondaryButton>
        </div>
      </div>
    </PageContainer>
  );
}
