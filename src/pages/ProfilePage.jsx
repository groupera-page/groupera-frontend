import React from "react";
import PageContainer from "../components/Globals/PageContainer";
import ProfileTable from "../components/Profile/ProfileTable";

export default function GroupsPage() {
  return (
    <PageContainer>
      <div className="pb-36 lg:pb-0">
        <ProfileTable />
      </div>
    </PageContainer>
  );
}
