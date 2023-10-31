import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";

import Home from "./pages/Home";
// import "./App.css";
import Login from "./pages/LoginPage";
import SignupPage from "./components/SignUp/SignUp";
import EmailVerify from "./components/EmailVerify";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
