import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-[SecondaryFont]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
};

export default App;
