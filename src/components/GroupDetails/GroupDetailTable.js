import React from "react";
import GroupDetailNavbar from "./GroupDetailNavbar";
import GroupTermineSubPage from "./GroupSubPages/GroupTermineSubPage";
import GroupPinnwandSubPage from "./GroupSubPages/GroupPinnwandSubPage";
import GroupMemberSubPage from "./GroupSubPages/GroupMemberSubPage";
import GroupDocumentSubPage from "./GroupSubPages/GroupDocumentSubPage";
import { Routes, Route } from "react-router-dom";

export default function GroupDetailTable({ group }) {
  console.log(group.topic);
  return (
    <div className=" my-8">
      <GroupDetailNavbar />
      <hr className="border-BLUE_PRIMARY border-l" />
      <Routes>
        <Route path="termine" element={<GroupTermineSubPage group={group} />} />
        <Route path="Pinnwand" element={<GroupPinnwandSubPage />} />
        <Route
          path="Mitgliederinnen"
          element={<GroupMemberSubPage group={group} />}
        />
        <Route
          path="Unterlagen"
          element={<GroupDocumentSubPage group={group} />}
        />
      </Routes>
    </div>
  );
}
