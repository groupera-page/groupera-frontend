import React from "react";
import ProfileSubPage from "./ProfileSubPages/ProfileSubPage";
import UserSettingsSubPage from "./ProfileSubPages/UserSettingsSubPage";
import UserSubscriptionSubPage from "./ProfileSubPages/UserSubscriptionSubPage";
import NavbarSub from "../Navigation/NavbarSub";
import { Routes, Route } from "react-router-dom";

export default function ProfileTable({ user }) {
  const subPages = ["Profil", "Einstellungen", "Abo & Zahlungen"];

  return (
    <div className="my-8 border-2 rounded-lg w-full">
      <NavbarSub subPages={subPages} />
      <hr className="border-BLUE_PRIMARY border-l" />
      <Routes>
        <Route path="Profil" element={<ProfileSubPage user={user} />} />
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
