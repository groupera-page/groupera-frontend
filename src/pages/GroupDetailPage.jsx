import React, {useEffect} from "react";
import PageContainer from "../components/Globals/PageContainer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { BsArrowLeft } from "react-icons/bs";
import GroupDetailCard from "../components/GroupDetails/GroupDetailCard";
import GroupDetailTable from "../components/GroupDetails/GroupDetailTable";
import {selectAuth} from "../features/auth/authSlice";
import {findGroup} from "../features/groups/groupSlice";

const GroupDetailPage = () => {
  const { groupId } = useParams();

  const group = useSelector((state) => state.groups.groups.find(group => group.id === groupId));
  const {user} = useSelector(selectAuth)

  const isMember = group?.members?.length > 0 && group.members.some(m => m.id === user.id)
  const isAdmin = user.id === group?.moderator.id

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // if (group) return
    dispatch(findGroup(groupId))
  }, [])

  return (
    <PageContainer>
      <div className="flex flex-col w-full lg:mx-14 mt-4 lg:mt-10 lg:pr-28">
        <div className="mb-4">
          <PrimaryButton isInversed={true} handleButtonClick={() => navigate("/groups")}>
            <div className="flex items-center">
              <BsArrowLeft
                className="w-5 mr-2 text-PURPLE_PRIMARY"
                size={15}
              />
              Zur Suche
            </div>
          </PrimaryButton>
        </div>

        {
          group && <GroupDetailCard group={group} user={user} isAdmin={isAdmin} isMember={isMember} />
        }
        {
          group && group.verified ?
            (isMember || isAdmin) &&
            <GroupDetailTable group={group} />
          :
            isAdmin &&
            <div className="mt-8">
              <h6 className="mb-4">
                Wir haben Deine Anfrage für diese Gruppe erhalten!
              </h6>

              <div className="paragraph-md my-4">
                Wir sind dabei eine Moderation für die Gruppe zu organisieren.
                Die nächsten Schritte werden wir dir per Email zusenden. Bis dahin
                ist die Gruppe noch offline bis wir eine Moderation gefunden haben.
              </div>

              <div className="paragraph-md my-4">
                Du hast Fragen vorab? Schicke eine Email an{" "}
                <a href="mailto:help@groupera.de" className="text-PURPLE_PRIMARY">
                  help@groupera.de
                </a>
              </div>
            </div>
        }
      </div>
    </PageContainer>
  );
}

export default GroupDetailPage
