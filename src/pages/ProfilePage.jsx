import React from "react";
import PageContainer from "../components/Globals/PageContainer";
import TableContainer from "../components/Globals/TableContainer";
import ProfileSubPage from "./ProfileSubPages/ProfileSubPage";
import UserSettingsSubPage from "./ProfileSubPages/UserSettingsSubPage";
import UserSubscriptionSubPage from "./ProfileSubPages/UserSubscriptionSubPage";
import { Routes, Route } from "react-router-dom";

export default function ProfilePage({ user }) {
  const subPages = ["Profil"];
  return (
    <PageContainer>
      <div className="lg:pb-0 w-full mt-4 lg:mt-10 lg:p-14">
        <TableContainer subPages={subPages}>
          <Routes>
            <Route path={subPages[0]} element={<ProfileSubPage />} />
            <Route
              path="Einstellungen"
              element={<UserSettingsSubPage user={user} />}
            />
            <Route
              path="Abo & Zahlungen"
              element={<UserSubscriptionSubPage user={user} />}
            />
          </Routes>
        </TableContainer>
      </div>
    </PageContainer>
  );
}
