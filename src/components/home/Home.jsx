import React from "react";
import { Main, Button, MobileHeading, Overlay } from "./home.style";
import { useNavigate } from "react-router-dom";

const Home = ({ setSelectedTab }) => {
  const navigate = useNavigate();
  return (
    <Main>
      <MobileHeading>Shopping Cart</MobileHeading>
      <Button
        onClick={() => {
          setSelectedTab("products");
          navigate("/products");
        }}
      >
        Shop Now
      </Button>
      <Overlay />
    </Main>
  );
};

export default Home;
