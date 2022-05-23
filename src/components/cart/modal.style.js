import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Section = styled.section`
  width: clamp(50%, 70%, 80%);
  height: 30%;
  display: flex;
  background: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  font-size: 22px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: blueviolet;

  @media screen and (max-width: 450px) {
    text-align: center;
  }
`;
