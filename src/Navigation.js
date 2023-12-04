import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectionLayout from "./layouts/ProtectionLayout";

import Home from "./pages/HomePage";
import Login from "./features/auth/pages/Login";
import SignUp from "./features/auth/pages/SignUp";
import AlertsWrapper from "./features/alert/AlertsWrapper";
import MenusContainer from "./components/Navigation/MenusContainer";
import ScrollToTop from "./util/ScrollToTop";
import GroupsPage from "./pages/GroupsPage";
import GroupCreatePage from "./pages/GroupCreatePage";
import GroupEditPage from "./pages/GroupEditPage";
import GroupEventPage from "./pages/GroupEventPage";
import GroupDetailPage from "./pages/GroupDetailPage";
import ProfilePage from "./pages/ProfilePage";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<ProtectionLayout protect={false}/>}>
          <Route path="/auth/login" element={ <Login/> } />
          <Route path="/auth/signup" element={ <SignUp/> } />
        </Route>
        <Route element={<ProtectionLayout/>}>
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
                  <GroupCreatePage />
                </ScrollToTop>
              </>
            }
          />

          <Route
            path="/groups/:slug/edit"
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
            path="/groups/:slug/edit/event"
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
            path="/groups/:slug/*"
            element={
              <>
                <MenusContainer />
                <GroupDetailPage />
              </>
            }
          />

          <Route
            path="/profile/:slug/*"
            element={
              <>
                <MenusContainer />
                <ProfilePage />
              </>
            }
          />
          <Route path="/profile" element={<div>Profile</div>} />
        </Route>
      </Routes>
      <AlertsWrapper/>
    </Router>
  );
}

export default Navigation;
