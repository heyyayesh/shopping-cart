import styled from "styled-components";
import background from "../../assets/home.jpg";
import mobile from "../../assets/mobile.jpg";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 450px) {
    background-image: url(${mobile});
    background-position: center;
    background-size: cover;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 80px;
  background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 38px;
  font-family: "Inter", sans-serif;
  padding: 5px;
  cursor: pointer;
  margin-right: 200px;
  font-weight: 600;
  box-shadow: none;
  transition: box-shadow 100ms ease-in-out;
  z-index: 1;

  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  }

  @media screen and (max-width: 450px) {
    font-size: 32px;
    margin: 0 0 100px;
  }
`;

export const MobileHeading = styled.h1`
  display: none;
  @media screen and (max-width: 450px) {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 36px;
    position: absolute;
    color: white;
    top: 20%;
    z-index: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  z-index: 0;

  @media screen and (max-width: 450px) {
    background: rgba(0, 0, 0, 0.3);
  }
`;
