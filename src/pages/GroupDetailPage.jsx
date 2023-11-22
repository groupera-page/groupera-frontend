import React from "react";
import PageContainer from "../components/PageContainer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import GroupDetailCard from "../components/GroupDetails/GroupDetailCard";
import GroupDetailTable from "../components/GroupDetails/GroupDetailTable";

export default function GroupDetailPage() {
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
            <Link to={`/groups/`}>
              <div className="flex items-center">
                <BsArrowLeft
                  className="w-5 mr-3 text-PURPLE_PRIMARY"
                  size={15}
                />
                Zur Suche
              </div>
            </Link>
          </PrimaryButton>
        </div>

        <GroupDetailCard group={thisGroup} isAdmin={isAdmin} />
        <GroupDetailTable group={thisGroup} />
      </div>
    </PageContainer>
  );
}
