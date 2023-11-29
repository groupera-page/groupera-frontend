import React from "react";
import GroupTermineSubPage from "./GroupSubPages/GroupTermineSubPage";
import GroupPinnwandSubPage from "./GroupSubPages/GroupPinnwandSubPage";
import GroupMemberSubPage from "./GroupSubPages/GroupMemberSubPage";
import GroupDocumentSubPage from "./GroupSubPages/GroupDocumentSubPage";
import NavbarSub from "../Navigation/NavbarSub";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../../util/ScrollToTop";

export default function GroupDetailTable({ group }) {
  const subPages = ["Termine", "MitgliederInnen", "Unterlagen"];

  return (
    <div className=" my-8">
      <NavbarSub subPages={subPages} />

      <Routes>
        <Route path="termine" element={<GroupTermineSubPage group={group} />} />

        <Route
          path="/"
          element={
            <ScrollToTop>
              <GroupTermineSubPage group={group} />
            </ScrollToTop>
          }
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
