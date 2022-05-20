import React from "react";
import { Main, Button } from "./home.style";
import { useNavigate } from "react-router-dom";

const Home = ({ setSelectedTab }) => {
  const navigate = useNavigate();
  return (
    <Main>
      <Button
        onClick={() => {
          setSelectedTab("products");
          navigate("/products");
        }}
      >
        Shop Now
      </Button>
    </Main>
  );
};

export default Home;
