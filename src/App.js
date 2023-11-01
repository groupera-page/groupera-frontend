import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import FunnelChoicePage from "./pages/FunnelChoicePage";
import EmailVerify from "./components/EmailVerify";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/registration-choice" element={<FunnelChoicePage />} />
        <Route
          path="/registration-choice-join"
          element={<RegistrationPage />}
        />
        <Route
          path="/registration-choice-open"
          element={<RegistrationPage />}
        />
        <Route path="/registration-user-basic" element={<RegistrationPage />} />
        <Route path="/registration-user-group" element={<RegistrationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
