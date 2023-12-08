import {useEffect, useState} from "react";
import PageContainer from "../components/Globals/PageContainer";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";

import GroupDetailCard from "../components/GroupDetails/GroupDetailCard";
import {selectAuth} from "../features/auth/authSlice";
import {findGroup} from "../features/groups/groupSlice";

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
const GroupEditPage = () => {
  const [showImagePicker, setShowImagePicker] = useState(false);
  const { groupId } = useParams();

  const group = useSelector((state) => state.groups.groups.find(group => group.id === groupId));
  const {user} = useSelector(selectAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    // if (group) return
    dispatch(findGroup(groupId))
  }, [])

  const handleEditImage = () => {
    setShowImagePicker(!showImagePicker);
  }

  if (!group) {
    return <div>Loading</div>
  }

  return (
    <PageContainer>
      <div className="flex flex-col w-full">
        <div className="mb-4">
          <Link to={`/groups/${groupId}`}>
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
          group={group}
          isAdmin={user.id === group.moderator.id}
          isEditable={true}
          handleEditImage={handleEditImage}
        />

        {/*<div className="bg-BG_PRIMARY rounded-md border border-BORDER_PRIMARY p-4 my-4 ">*/}
        {/*  <ul className="flex flex-wrap justify-between items-center paragraph-lg">*/}
        {/*    <li>*/}
        {/*      <ul className="flex flex-wrap gap-4 lg:gap-12 items-center">*/}
        {/*        <li className="text-PURPLE_PRIMARY">*/}
        {/*          {*/}
        {/*            [*/}
        {/*              "Sonntags",*/}
        {/*              "Montags",*/}
        {/*              "Dienstags",*/}
        {/*              "Mittwochs",*/}
        {/*              "Donnerstags",*/}
        {/*              "Freitags",*/}
        {/*              "Samstags",*/}
        {/*            ][new Date(mockEvents[0].start.dateTime).getDay()]*/}
        {/*          }*/}
        {/*        </li>*/}
        {/*        <li className="text-PURPLE_PRIMARY">*/}
        {/*          {mockEvents[0].start.time} Uhr*/}
        {/*        </li>*/}

        {/*        <li>*/}
        {/*          {(new Date(mockEvents[0].end.dateTime) -*/}
        {/*            new Date(mockEvents[0].start.dateTime)) /*/}
        {/*            (1000 * 60)}*/}
        {/*          Minuten*/}
        {/*        </li>*/}
        {/*        <li>Placeholder</li>*/}

        {/*        <li>*/}
        {/*          <div className="flex gap-2 items-center">*/}
        {/*            {group.members.length}*/}
        {/*            <BsPeopleFill*/}
        {/*              className="w-5 mr-3 text-PURPLE_PRIMARY"*/}
        {/*              size={20}*/}
        {/*            />*/}
        {/*          </div>*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <ul className="hidden lg:flex gap-4">*/}
        {/*        <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">*/}
        {/*          <IoSettingsOutline size={22} />*/}
        {/*        </li>*/}
        {/*        <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">*/}
        {/*          <BsTrash3 size={22} />*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}

        <div className="flex justify-end mb-8 gap-8">
          <ul className="flex gap-8 lg:hidden items-center">
            <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">
              <IoSettingsOutline size={28} />
            </li>
            <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">
              <BsTrash3 size={28} />
            </li>
          </ul>
          {/*<Link to={`/groups/${groupId}/edit/event`}>*/}
          {/*  <PrimaryButton>Termin hinzufügen</PrimaryButton>*/}
          {/*</Link>*/}
        </div>
        <div className="flex gap-4">
          <PrimaryButton>Speichern</PrimaryButton>
          <SecondaryButton>
            <div className="text-lg lg:text-base">Gruppe löschen</div>
          </SecondaryButton>
        </div>
      </div>
    </PageContainer>
  );
}

export default GroupEditPage;
