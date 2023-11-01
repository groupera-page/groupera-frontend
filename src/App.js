import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import FunnelOptionPage from "./pages/FunnelOptionPage";
import EmailVerify from "./components/EmailVerify";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/registration-user" element={<RegistrationPage />} />
        {/* Funnel nr 2 starts with options before registration */}
        <Route path="/registration-option" element={<FunnelOptionPage />} />
        <Route
          path="/registration-option-join"
          element={<RegistrationPage />}
        />
        <Route
          path="/registration-option-create"
          element={<RegistrationPage />}
        />
        {/*  */}
        <Route path="/registration-user-group" element={<RegistrationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
