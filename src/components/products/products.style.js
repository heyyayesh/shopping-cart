import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  margin: 0px 100px 50px 100px;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 50px;
  place-items: center;

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* grid-template-rows: repeat(auto-fit, minmax(30px, 1fr)); */
    margin: 0 20px 50px;
  }
`;

export const Card = styled.div`
  width: 450px;
  height: 520px;
  background-color: white;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    width: 300px;
    min-height: 520px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 600;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

export const Rating = styled.h3`
  font-family: "Karla", sans-serif;
  font-weight: 400;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const AddToCart = styled.button`
  width: 100%;
  font-family: "Karla", sans-serif;
  background-color: blueviolet;
  border-radius: 8px;
  border: none;
  color: white;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  padding: 2px 5px;
  transform: scale(1);
  transition: transform 50ms ease-in-out;

  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-column: 1 / -1;
  margin-top: 100px;
  margin-bottom: 30px;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30px 30px;
    row-gap: 30px;
    margin-bottom: 0;
  }
`;

export const Category = styled.button`
  flex: 1;
  font-size: 16px;
  height: 40px;
  padding: 2px 5px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? "blueviolet" : "lightgray"};
  color: ${({ selected }) => (selected ? "white" : "black")};
  transform: scale(1);
  transition: transform 50ms ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
  }

  @media screen and (max-width: 450px) {
    grid-column: ${({ type }) => (type === "all" ? "span 2" : "span 1")};
  }
`;
