import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalCss from "./GlobalStyles";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <BrowserRouter>
      <GlobalCss />
      <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Routes>
        <Route path="/" element={<Home setSelectedTab={setSelectedTab} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
