import React, { useEffect } from "react";
import PageContainer from "../components/GlobalLayout/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { BsArrowLeft } from "react-icons/bs";
import GroupDetailCard from "../components/GroupDetails/GroupDetailCard";
import TableContainer from "../components/GlobalLayout/TableContainer";
import { selectAuth } from "../features/auth/authSlice";
import { findGroup } from "../features/groups/groupSlice";
import { Routes, Route } from "react-router-dom";
import GroupMeetingsSubPage from "./GroupSubPages/GroupMeetingsSubPage";
import GroupMessageBoardSubPage from "./GroupSubPages/GroupMessageBoardSubPage";
import GroupMemberSubPage from "./GroupSubPages/GroupMemberSubPage";
import GroupDocumentSubPage from "./GroupSubPages/GroupDocumentSubPage";

const GroupDetailPage = () => {
  const { groupId } = useParams();

  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === groupId)
  );
  const { user } = useSelector(selectAuth);

  const isMember =
    group?.members?.length > 0 && group.members.some((m) => m.id === user.id);
  const isAdmin = user.id === group?.moderator.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // if (group) return
    dispatch(findGroup(groupId));
  }, []);

  const subPages = ["Termine", "MitgliederInnen", "Unterlagen"];

  return (
    <PageContainer>
      <div className="flex flex-col w-full lg:px-14 pt-4 lg:pt-10 lg:pr-28">
        <div className="mb-4">
          <PrimaryButton
            isInversed={true}
            handleButtonClick={() => navigate("/groups")}
          >
            <div className="flex items-center">
              <BsArrowLeft className="w-5 mr-2 text-PURPLE_PRIMARY" size={15} />
              Zur Suche
            </div>
          </PrimaryButton>
        </div>

        {group && (
          <GroupDetailCard
            group={group}
            user={user}
            isAdmin={isAdmin}
            isMember={isMember}
          />
        )}
        {group && group.verified
          ? (isMember || isAdmin) && (
              <div className="mt-10">
                <TableContainer subPages={subPages}>
                  <Routes>
                    <Route
                      path="/"
                      element={<GroupMeetingsSubPage group={group} />}
                    />
                    <Route
                      path={subPages[0]}
                      element={<GroupMeetingsSubPage group={group} />}
                    />
                    <Route
                      path="Pinnwand"
                      element={<GroupMessageBoardSubPage />}
                    />
                    <Route
                      path={subPages[1]}
                      element={<GroupMemberSubPage group={group} />}
                    />
                    <Route
                      path={subPages[2]}
                      element={<GroupDocumentSubPage group={group} />}
                    />
                  </Routes>
                </TableContainer>
              </div>
            )
          : isAdmin && (
              <div className="mt-8">
                <h6 className="mb-4">
                  Wir haben Deine Anfrage für diese Gruppe erhalten!
                </h6>

                <div className="paragraph-md my-4">
                  Wir sind dabei eine Moderation für die Gruppe zu organisieren.
                  Die nächsten Schritte werden wir dir per Email zusenden. Bis
                  dahin ist die Gruppe noch offline bis wir eine Moderation
                  gefunden haben.
                </div>

                <div className="paragraph-md my-4">
                  Du hast Fragen vorab? Schicke eine Email an{" "}
                  <a
                    href="mailto:help@groupera.de"
                    className="text-PURPLE_PRIMARY"
                  >
                    help@groupera.de
                  </a>
                </div>
              </div>
            )}
      </div>
    </PageContainer>
  );
};

export default GroupDetailPage;
