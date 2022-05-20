import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
  background-color: white;
  gap: 50px;
  padding: 30px 40px;
  box-shadow: 0 0 10px gray;
`;

export const Title = styled.h1`
  flex: 1;
  font-family: "Inter", sans-serif;
  font-size: 30px;
`;

export const Img = styled.img`
  width: 38px;
`;

export const StyledLink = styled(Link)`
  padding: 5px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    height: 15%;
    width: 100%;
    background-color: blueviolet;
    z-index: 0;
    transform: ${({ selected }) =>
      selected ? "translateX(0%)" : "translateX(-100%)"};
    transition: transform 150ms ease-in-out;
  }

  &:hover {
    &::after {
      transform: translateX(0);
    }
  }
`;

export const Badge = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: blueviolet;
  top: 0px;
  right: 0px;
  color: white;
  font-family: "karla", sans-serif;
  font-size: 14px;
  font-weight: 700;
  display: grid;
  place-items: center;
`;
