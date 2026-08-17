import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-[SecondaryFont]">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
