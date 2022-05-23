import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import GlobalCss from "./GlobalStyles";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

const App = () => {
  // State to keep tabs on what tab is selected
  const [selectedTab, setSelectedTab] = useState("home");
  // State that holds all the products
  const [products, setProducts] = useState([]);
  // State that represents the shopping cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  function isPresentInCart(id) {
    return !!cart.find((item) => item.product.id === id);
  }

  const addItemToCart = (id) => {
    if (cart.length === 0) {
      setCart([
        {
          id: uuidv4(),
          product: products.find((item) => item.id === id),
          count: 1,
        },
      ]);
    } else {
      if (isPresentInCart(id)) {
        let prevCount = cart.find((item) => item.product.id === id).count;
        const newCart = cart.filter((item) => item.product.id !== id);
        setCart([
          ...newCart,
          {
            id: uuidv4(),
            product: products.find((item) => item.id === id),
            count: prevCount + 1,
          },
        ]);
      } else {
        setCart([
          ...cart,
          {
            id: uuidv4(),
            product: products.find((item) => item.id === id),
            count: 1,
          },
        ]);
      }
    }
  };

  const removeItemFromCart = (id) => {
    let prevCount = cart.find((item) => item.product.id === id).count;
    if (prevCount === 1) {
      setCart(cart.filter((item) => item.product.id !== id));
    } else {
      const newCart = cart.filter((item) => item.product.id !== id);
      setCart([
        ...newCart,
        {
          id: uuidv4(),
          product: products.find((item) => item.id === id),
          count: prevCount - 1,
        },
      ]);
    }
  };

  const emptyCart = () => setCart([]);

  return (
    <BrowserRouter>
      <GlobalCss />
      <NavBar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        cartCount={cart.length}
      />
      <Routes>
        <Route path="/" element={<Home setSelectedTab={setSelectedTab} />} />
        <Route
          path="/products"
          element={
            <Products products={products} addItemToCart={addItemToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeItemFromCart={removeItemFromCart}
              setSelectedTab={setSelectedTab}
              emptyCart={emptyCart}
              setCart={setCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
