import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";

import Login from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FunnelToSignupPage from "./pages/FunnelToSignupPage";
import EmailVerify from "./components/EmailVerify";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}

        <Route path="/" element={<Home />} />
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
