import React from "react";
import ProfileSubPage from "./ProfileSubPages/ProfileSubPage";
import NavbarSub from "../Navigation/NavbarSub";
import { Routes, Route } from "react-router-dom";

export default function ProfileTable({ user }) {
  const subPages = ["Profil", "Einstellungen", "Abo & Zahlungen"];

  return (
    <div className=" my-8 border-2 rounded-lg">
      <NavbarSub subPages={subPages} />
      <hr className="border-BLUE_PRIMARY border-l" />
      <Routes>
        <Route path="Profile" element={<ProfileSubPage user={user} />} />
        <Route path="Einstellungen" element={<ProfileSubPage user={user} />} />
        <Route
          path="Abo & Zahlungen"
          element={<ProfileSubPage user={user} />}
        />
      </Routes>
    </div>
  );
}
