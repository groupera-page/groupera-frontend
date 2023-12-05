import React from "react";
import PageContainer from "../components/Globals/PageContainer";
import ProfileTable from "../components/Profile/ProfileTable";

export default function GroupsPage() {
  return (
    <PageContainer>
      <div className=" lg:pb-0 w-full mt-4 lg:mt-10 lg:p-14">
        <ProfileTable />
      </div>
    </PageContainer>
  );
}
