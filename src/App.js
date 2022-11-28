import { Routes, Route } from "react-router-dom";

import style from "./App.css";
import AboutUsPage from "./pages/about_us_page";
import HiringPage from "./pages/hiring_page";
import HomePage from "./pages/home_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/hiring" element={<HiringPage />} />
    </Routes>
  );
}

export default App;
