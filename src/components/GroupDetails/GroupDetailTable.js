import React from "react";
import GroupDetailNavbar from "./GroupDetailNavbar";
import GroupTermineSubPage from "./GroupSubPages/GroupTermineSubPage";
import GroupPinnwandSubPage from "./GroupSubPages/GroupPinnwandSubPage";
import GroupMemberSubPage from "./GroupSubPages/GroupMemberSubPage";
import GroupDocumentSubPage from "./GroupSubPages/GroupDocumentSubPage";
import { Routes, Route } from "react-router-dom";

export default function GroupDetailTable() {
  return (
    <div className=" my-8">
      <GroupDetailNavbar />
      <hr className="border-BLUE_PRIMARY border-l" />
      <Routes>
        <Route path="Termine" element={<GroupTermineSubPage />} />
        <Route path="Pinnwand" element={<GroupPinnwandSubPage />} />
        <Route path="Mitgliederinnen" element={<GroupMemberSubPage />} />
        <Route path="Unterlagen" element={<GroupDocumentSubPage />} />
      </Routes>
    </div>
  );
}
