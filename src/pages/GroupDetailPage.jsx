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
  const { slug } = useParams();
  const thisGroup = mockDataGroups.find((group) => group.id === slug);

  return (
    <PageContainer>
      <div className="flex flex-col">
        <PrimaryButton isInversed={true}>
          <Link to={`/groups/`}>
            <div className="flex">
              <BsArrowLeft className="w-5 mr-3 text-PURPLE_PRIMARY" size={18} />
              Zurück zur Suche
            </div>
          </Link>
        </PrimaryButton>
        <h1>{thisGroup.name} </h1>
        <GroupDetailCard />
        <GroupDetailTable />
      </div>
    </PageContainer>
  );
}
