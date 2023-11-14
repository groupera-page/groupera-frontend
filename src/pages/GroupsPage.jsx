import React from "react";
import PageContainer from "../components/PageContainer";
import Searchbox from "../components/UserInputs/Searchbox";
export default function GroupsPage() {
  return (
    <PageContainer title={`Gruppen`}>
      <Searchbox placeholderText={"Gib hier deine Suche ein..."} />
    </PageContainer>
  );
}
