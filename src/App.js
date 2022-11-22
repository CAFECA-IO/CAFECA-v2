import { Routes, Route } from "react-router-dom";

import style from "./App.css";
import AboutUsPage from "./pages/about-us-page";
import HiringPage from "./pages/hiring-page";
import HomePage from "./pages/home-page";

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
