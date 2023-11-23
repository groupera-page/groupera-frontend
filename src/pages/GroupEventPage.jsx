import React from "react";
import PageContainer from "../components/PageContainer";
import GroupEventPlan from "../components/GroupDetails/GroupEventPlan";

export default function GroupEventPage() {
  return (
    <PageContainer>
      <div className="flex flex-col w-full">
        <h3>Termin hinzufügen</h3>
        <GroupEventPlan />
      </div>
    </PageContainer>
  );
}
