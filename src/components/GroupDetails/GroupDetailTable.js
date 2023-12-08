import React from "react";
import GroupTermineSubPage from "./GroupSubPages/GroupTermineSubPage";
import GroupPinnwandSubPage from "./GroupSubPages/GroupPinnwandSubPage";
import GroupMemberSubPage from "./GroupSubPages/GroupMemberSubPage";
import GroupDocumentSubPage from "./GroupSubPages/GroupDocumentSubPage";
import NavbarSub from "../Navigation/NavbarSub";
import { Routes, Route } from "react-router-dom";

const GroupDetailTable = ({ group }) => {
  const subPages = ["MitgliederInnen", "Unterlagen"];

  return (
    <div className=" my-8">
      <NavbarSub subPages={subPages} />

      <Routes>
        <Route path="termine" element={<GroupTermineSubPage group={group} />} />

        <Route
          path="/"
          element={<GroupMemberSubPage group={group} />}
        />

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

export default GroupDetailTable;
