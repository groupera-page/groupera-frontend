import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import GroupsPage from "./pages/GroupsPage";
import GroupDetailPage from "./pages/GroupDetailPage";
import GroupEditPage from "./pages/GroupEditPage";
import GroupEventPage from "./pages/GroupEventPage";
import GroupCreatePage from "./pages/GroupCreatePage";
import MenusContainer from "./components/Navigation/MenusContainer";
import Login from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FunnelToSignupPage from "./pages/FunnelToSignupPage";
import EmailVerify from "./components/EmailVerify";
import ScrollToTop from "./util/ScrollToTop";

function App() {
  return (
    <Router>
      <Routes>
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

        <Route path="/signup-user" element={<SignupPage />} />
        {/* Funnel nr 2 starts with options before registration */}
        <Route path="/signup-option" element={<FunnelToSignupPage />} />
        <Route path="/signup-option-join" element={<SignupPage />} />
        <Route path="/signup-option-create" element={<SignupPage />} />
        {/*  */}
        <Route path="/signup-user-group" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
