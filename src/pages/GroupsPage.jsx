import React from "react";
import PageContainer from "../components/PageContainer";
import GroupSearchContainer from "../components/GroupSearch/GroupSearchContainer";
import GroupCardContainer from "../components/GroupSearch/GroupCardContainer";
export default function GroupsPage() {
  return (
    <PageContainer title={`Gruppen`}>
      <GroupSearchContainer />
      <GroupCardContainer />
      <h4>Your Groups</h4>
      <GroupCardContainer />
    </PageContainer>
  );
}
