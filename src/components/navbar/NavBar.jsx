import React, { useEffect, useRef } from "react";
import { Nav, Img, Title, StyledLink, Badge } from "./navbar.style";
import homeIcon from "../../assets/home.svg";
import productsIcon from "../../assets/shopping-bag.svg";
import cartIcon from "../../assets/shopping-cart.svg";

const NavBar = ({ selectedTab, setSelectedTab, cartCount }) => {
  const homeButtonRef = useRef();
  useEffect(() => homeButtonRef.current.click(), []);
  return (
    <Nav>
      <Title>Shopping Cart</Title>
      <StyledLink
        selected={selectedTab === "home" ? true : false}
        onClick={() => setSelectedTab("home")}
        to="/"
        ref={homeButtonRef}
      >
        <Img src={homeIcon} alt="home icon" />
      </StyledLink>
      <StyledLink
        selected={selectedTab === "products" ? true : false}
        onClick={() => setSelectedTab("products")}
        to="/products"
      >
        <Img src={productsIcon} alt="products icon" />
      </StyledLink>
      <StyledLink
        selected={selectedTab === "cart" ? true : false}
        onClick={() => setSelectedTab("cart")}
        to="/cart"
      >
        <Img src={cartIcon} alt="cart icon" />
        {cartCount === 0 ? null : <Badge>{cartCount}</Badge>}
      </StyledLink>
    </Nav>
  );
};

export default NavBar;
