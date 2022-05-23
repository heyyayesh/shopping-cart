import styled from "styled-components";
import { Category } from "../products/products.style";
import { Card } from "../products/products.style";

export const CartCard = styled(Card)`
  position: relative;
`;

export const EmptyStatement = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 32px;
  font-family: "Karla", sans-serif;
  font-weight: 700;

  @media screen and (max-width: 450px) {
    padding: 20px;
    text-align: center;
    gap: 40px;
  }
`;

export const Button = styled(Category)`
  background-color: ${({ type }) =>
    type === "primary" ? "blueviolet" : "white"};
  border: ${({ type }) =>
    type === "primary" ? "none" : "2px solid blueviolet"};
  color: ${({ type }) => (type === "primary" ? "white" : "black")};
  border-radius: 8px;
  padding: 10px 25px;
  flex: ${({ func }) => (func === "nav" ? "unset" : "1")};
  font-size: 18px;

  @media screen and (max-width: 450px) {
    grid-column: 1 / -1;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: blueviolet;
  color: white;
  font-family: "Karla", sans-serif;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
`;
