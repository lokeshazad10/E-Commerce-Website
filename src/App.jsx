import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Brands from "./pages/Brands";
import OnSale from "./pages/OnSale";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="font-[SecondaryFont]">
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/sale" element={<OnSale />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
};

export default App;
