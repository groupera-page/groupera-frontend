import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectionLayout from "./layouts/ProtectionLayout";

import Home from "./pages/Home";
import Login from "./features/auth/pages/Login";
import SignUp from "./features/auth/pages/SignUp";
import AlertsWrapper from "./features/alert/AlertsWrapper";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<ProtectionLayout protect={false}/>}>
          <Route path="/auth/login" element={ <Login/> } />
          <Route path="/auth/signup" element={ <SignUp/> } />
        </Route>
        <Route element={<ProtectionLayout/>}>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<div>Profile</div>} />
        </Route>
      </Routes>
      <AlertsWrapper/>
    </Router>
  );
}

export default Navigation;
