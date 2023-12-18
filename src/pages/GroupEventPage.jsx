import React, {useEffect} from "react";
import PageContainer from "../components/Globals/PageContainer";
import MeetingEditForm from "../features/groups/components/MeetingEditForm";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findGroup, updateGroupMeeting} from "../features/groups/groupSlice";
import {selectAuth} from "../features/auth/authSlice";

const GroupEventPage = () => {
  const { groupId, eventId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === groupId)
  );
  const { user } = useSelector(selectAuth);

  const meeting = group?.meetings.find(m => m.id === eventId)

  // const isMember = group?.members?.length > 0 && group.members.some(m => m.id === user.id)
  const isAdmin = user.id === group?.moderator.id;

  useEffect(() => {
    // if (group) return
    dispatch(findGroup(groupId));
  }, []);

  const handleUpdate = async (values) => {
    if (!isAdmin) return;
    const startDate = new Date(`${values.startDate} ${values.time}`)
    try {
      const response = await dispatch(
        updateGroupMeeting({
          meetingId: meeting.id,
          body: {
            startDate: startDate,
            recurrence: {
              type: values.recurrenceType,
              days: [startDate.getDay()],
            },
            duration: values.duration,
          },
        })
      );
      if (!response) throw Error("something went wrong");
      navigate(`/groups/${group.id}/edit`);
    } catch (e) {
      // handle the response
      // if an error than don't go to next step but show the error, otherwise proceed to next step.
      console.log("Error", e);
    }
  };

  return (
    <PageContainer>
      <div className="flex flex-col w-full mt-4 lg:mt-24 lg:pl-28">
        <h3 className="mb-1">Termin bearbeiten</h3>
        {
          meeting &&
          <MeetingEditForm onSubmit={handleUpdate} meeting={meeting}/>
        }
      </div>
    </PageContainer>
  );
}

export default GroupEventPage;
