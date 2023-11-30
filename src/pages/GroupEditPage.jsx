import { useState } from "react";
import PageContainer from "../components/Globals/PageContainer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";

import GroupDetailCard from "../components/GroupDetails/GroupDetailCard";

export default function GroupEditPage() {
  const [showImagePicker, setShowImagePicker] = useState(false);
  const mockEvents = [
    {
      id: "33dk58ss8dflia9emc3epprlpk_20231120T110000Z",
      start: {
        dateTime: "2023-11-20T12:00:00+01:00",
        time: "12:00",
      },
      end: {
        dateTime: "2023-11-20T12:30:00+01:00",
      },
    },
    {
      id: "33dk58ss8dflia9emc3epprlpk_20231204T110000Z",
      start: {
        dateTime: "2023-12-04T12:00:00+01:00",
        time: "12:00",
      },
      end: {
        dateTime: "2023-12-04T12:30:00+01:00",
      },
    },
  ];
  function handleEditImage() {
    setShowImagePicker(!showImagePicker);
  }
  const mockData = useSelector((state) => state.mockData.mockData);
  const groups = mockData.groups;
  const user = mockData.user[0];
  const { slug } = useParams();
  const thisGroup = groups.find((group) => group.id === slug);
  const isAdmin = user.moderatedGroups.find(
    (groupId) => thisGroup.id === groupId
  );

  return (
    <PageContainer>
      <div className="flex flex-col w-full">
        <div className="mb-4">
          <Link to={`/groups/${slug}/termine`}>
            <PrimaryButton isInversed={true}>
              <div className="flex items-center">
                <BsArrowLeft
                  className="w-5 mr-3 text-PURPLE_PRIMARY"
                  size={15}
                />
                Zurück zur Gruppe
              </div>
            </PrimaryButton>
          </Link>
        </div>

        <GroupDetailCard
          group={thisGroup}
          isAdmin={isAdmin}
          isEditable={true}
          handleEditImage={handleEditImage}
        />

        <div className="bg-BG_PRIMARY rounded-md border border-TEXT_LIGHTGRAY p-4 my-4 ">
          <ul className="flex flex-wrap justify-between items-center paragraph-lg">
            <li>
              <ul className="flex flex-wrap gap-4 lg:gap-12 items-center">
                <li className="text-PURPLE_PRIMARY">
                  {
                    [
                      "Sonntags",
                      "Montags",
                      "Dienstags",
                      "Mittwochs",
                      "Donnerstags",
                      "Freitags",
                      "Samstags",
                    ][new Date(mockEvents[0].start.dateTime).getDay()]
                  }
                </li>
                <li className="text-PURPLE_PRIMARY">
                  {mockEvents[0].start.time} Uhr
                </li>

                <li>
                  {(new Date(mockEvents[0].end.dateTime) -
                    new Date(mockEvents[0].start.dateTime)) /
                    (1000 * 60)}
                  Minuten
                </li>
                <li>Placeholder</li>

                <li>
                  <div className="flex gap-2">
                    {thisGroup.members}
                    <BsPeopleFill
                      className="w-5 mr-3 text-PURPLE_PRIMARY"
                      size={20}
                    />
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex gap-4 hidden lg:block">
                <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">
                  <IoSettingsOutline size={22} />
                </li>
                <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">
                  <BsTrash3 size={22} />
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex justify-end mb-8 gap-8">
          <ul className="flex gap-8 lg:hidden items-center">
            <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">
              <IoSettingsOutline size={28} />
            </li>
            <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">
              <BsTrash3 size={28} />
            </li>
          </ul>
          <Link to={`/groups/${slug}/edit/event`}>
            <PrimaryButton>Termin hinzufügen</PrimaryButton>
          </Link>
        </div>
        <div className="flex gap-4">
          <PrimaryButton>speichern</PrimaryButton>
          <SecondaryButton>Gruppe löschen</SecondaryButton>
        </div>
      </div>
    </PageContainer>
  );
}
