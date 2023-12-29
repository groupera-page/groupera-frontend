import React from "react";
import ProfileSubPage from "../../pages/ProfileSubPages/ProfileSubPage";
import UserSettingsSubPage from "../../pages/ProfileSubPages/UserSettingsSubPage";
import UserSubscriptionSubPage from "../../pages/ProfileSubPages/UserSubscriptionSubPage";
import NavbarSub from "../Navigation/NavbarSub";
import { Routes, Route } from "react-router-dom";

export default function ProfileTable({ user }) {
  const subPages = ["Profil"];

  return (
    <div className="shadow-md border rounded-lg w-full ">
      <NavbarSub subPages={subPages} />

      <Routes>
        <Route path="Profil" element={<ProfileSubPage />} />
        <Route
          path="Einstellungen"
          element={<UserSettingsSubPage user={user} />}
        />
        <Route
          path="Abo & Zahlungen"
          element={<UserSubscriptionSubPage user={user} />}
        />
      </Routes>
    </div>
  );
}
