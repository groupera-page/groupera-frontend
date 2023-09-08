import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Group from "./pages/Group";
import Groups from "./pages/Groups";
import PriceOverview from "./pages/PriceOverview";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/group" element={<Group />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/price-overview" element={<PriceOverview />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
