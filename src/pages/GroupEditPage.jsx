import React, { useEffect } from "react";
import PageContainer from "../components/Globals/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import {BsArrowLeft} from "react-icons/bs";
import { Link } from "react-router-dom";

import { selectAuth } from "../features/auth/authSlice";
import { findGroup, updateGroup } from "../features/groups/groupSlice";
import GroupEditForm from "../features/groups/components/GroupEditForm";

const GroupEditPage = () => {
  const { groupId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === groupId)
  );
  const { user } = useSelector(selectAuth);

  // const isMember = group?.members?.length > 0 && group.members.some(m => m.id === user.id)
  const isAdmin = user.id === group?.moderator.id;

  useEffect(() => {
    // if (group) return
    dispatch(findGroup(groupId));
  }, []);

  const handleUpdate = async (values) => {
    if (!isAdmin) return;
    try {
      const response = await dispatch(
        updateGroup({
          groupId: group.id,
          body: {
            name: values.name,
            description: values.description,
            img: values.img,
          },
        })
      );
      if (!response) throw Error("something went wrong");
      navigate(`/groups/${group.id}`);
    } catch (e) {
      // handle the response
      // if an error than don't go to next step but show the error, otherwise proceed to next step.
      console.log("Error", e);
    }
  };

  // const handleEditImage = () => {
  //   setShowImagePicker(!showImagePicker);
  // }

  if (!group) {
    return (
      <div className="flex justify-center items-center p-12 lg:mt-20">
        <div className="animate-spin rounded-full border-t-4 border-PURPLE_PRIMARY border-solid h-12 w-12 mr-3"></div>
        {/* <h3>Laden...</h3> */}
      </div>
    );
  }

  return (
    <PageContainer>
      <div className="flex flex-col w-full lg:mx-14 mt-4 lg:mt-10 lg:pr-28">
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

        <GroupEditForm onSubmit={handleUpdate} group={group} />
      </div>
    </PageContainer>
  );
};

export default GroupEditPage;
