import React from "react";
import PageContainer from "../components/Globals/PageContainer";
import GroupEventPlan from "../components/GroupDetails/GroupEventPlan";

export default function GroupEventPage() {
  return (
    <PageContainer>
      <div className="flex flex-col w-full mt-4 lg:mt-24 lg:pl-28">
        <h3 className="mb-1">Termin hinzufügen</h3>
        <GroupEventPlan />
      </div>
    </PageContainer>
  );
}
