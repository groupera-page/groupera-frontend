import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import styleTheme from "./styleTheme";
import ProtectionLayout from "./layouts/ProtectionLayout";

import Home from "./pages/HomePage";
import Login from "./features/auth/pages/Login";
import SignUp from "./features/auth/pages/SignUp";
import AlertsWrapper from "./features/alert/AlertsWrapper";
import MenusContainer from "./components/Navigation/MenusContainer";
import ScrollToTop from "./util/ScrollToTop";
import GroupsPage from "./pages/GroupsPage";
import GroupEditPage from "./pages/GroupEditPage";
import GroupEventPage from "./pages/GroupEventPage";
import GroupDetailPage from "./pages/GroupDetailPage";
import ProfilePage from "./pages/ProfilePage";
import MultiStepGroupCreate from "./features/groups/components/MultiStepGroupCreate";
import RequestResetPassword from "./features/auth/pages/RequestResetPassword";
import ResetPassword from "./features/auth/pages/ResetPassword";
import VideoApp from "./features/videoCalls/VideoApp";
import React from "react";
import logoSvg from "./assets/imgLogos/logoNoBg.svg";
import EMGSlate from "./pages/EMGSlate";

const SimpleNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-BG_GRAY flex justify-center h-16 items-center fixed w-full shadow-md z-10">
      <img
        src={logoSvg}
        onClick={() => navigate("/")}
        alt="logo"
        className="lg:w-32 w-20 cursor-pointer"
      />
    </div>
  );
};

function Navigation() {
  const underConstruction = true;

  if (underConstruction) {
    return <EMGSlate />;
  }
  return (
    <ThemeProvider theme={styleTheme}>
      <Router>
        <Routes>
          <Route path="/auth" element={<ProtectionLayout protect={false} />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route
              path="/auth/resetPassword/:resetPasswordToken"
              element={<ResetPassword />}
            />
            <Route
              path="/auth/forgotPassword"
              element={<RequestResetPassword />}
            />
          </Route>
          <Route element={<ProtectionLayout />}>
            <Route
              path="meeting/:meetingId"
              element={
                <>
                  <SimpleNavbar />
                  <VideoApp />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <MenusContainer />
                  <Home />
                </>
              }
            />

            <Route
              path="/groups"
              element={
                <>
                  <ScrollToTop>
                    <MenusContainer />
                    <GroupsPage />
                  </ScrollToTop>
                </>
              }
            />

            <Route
              path="/groups/group/create"
              element={
                <>
                  <ScrollToTop>
                    <MenusContainer />
                    <MultiStepGroupCreate />
                  </ScrollToTop>
                </>
              }
            />

            <Route
              path="/groups/:groupId/edit"
              element={
                <>
                  <ScrollToTop>
                    <MenusContainer />
                    <GroupEditPage />
                  </ScrollToTop>
                </>
              }
            />
            <Route
              path="/groups/:groupId/edit/event/:eventId"
              element={
                <>
                  <ScrollToTop>
                    <MenusContainer />
                    <GroupEventPage />
                  </ScrollToTop>
                </>
              }
            />

            <Route
              path="/groups/:groupId/*"
              element={
                <>
                  <MenusContainer />
                  <GroupDetailPage />
                </>
              }
            />

            <Route
              path="/profile/*"
              element={
                <>
                  <MenusContainer />
                  <ProfilePage />
                </>
              }
            />
            {/*<Route path="/profile" element={<div>Profile</div>} />*/}
          </Route>
        </Routes>
        <AlertsWrapper />
      </Router>
    </ThemeProvider>
  );
}

export default Navigation;
