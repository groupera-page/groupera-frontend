import React, {useEffect} from "react";
import PageContainer from "../components/Globals/PageContainer";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    // if (group) return
    dispatch(findGroup(groupId))
  }, [])

  return (
    <PageContainer>
      <div className="flex flex-col w-full lg:mx-14 mt-4 lg:mt-10 lg:pr-28">
        <div className="mb-4">
          <Link to={`/groups/`}>
            <PrimaryButton isInversed={true}>
              <div className="flex items-center">
                <BsArrowLeft
                  className="w-5 mr-2 text-PURPLE_PRIMARY"
                  size={15}
                />
                Zur Suche
              </div>
            </PrimaryButton>
          </Link>
        </div>

        {
          group && <GroupDetailCard group={group} isAdmin={isAdmin} isMember={isMember} />
        }
        {
          (isMember || isAdmin) &&
          <GroupDetailTable group={group} />
        }
      </div>
    </PageContainer>
  );
}

export default GroupDetailPage
