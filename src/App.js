import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalCss from "./GlobalStyles";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

const App = () => {
  // State to keep tabs on what tab is selected
  const [selectedTab, setSelectedTab] = useState("home");
  // State that holds all the products
  const [products, setProoducts] = useState([]);
  // State that represents the shopping cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProoducts(data);
      console.log(data);
    }

    getProducts();
  }, []);

  return (
    <BrowserRouter>
      <GlobalCss />
      <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Routes>
        <Route path="/" element={<Home setSelectedTab={setSelectedTab} />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
