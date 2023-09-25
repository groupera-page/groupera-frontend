import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import SignupPage from "./pages/SignupPage";
import EmailVerify from "./components/EmailVerify";

function App() {
  return (
    <Router>
  {/* <Navbar/> */}
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
