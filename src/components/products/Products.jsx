import React, { useEffect, useState } from "react";
import {
  Main,
  Card,
  CardImg,
  Title,
  Details,
  Price,
  Rating,
  AddToCart,
  Filter,
  Category,
} from "./products.style";

const Products = ({ products }) => {
  const [shownProducts, setShownProducts] = useState(products);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    switch (category) {
      case "all":
        setShownProducts(products);
        break;
      case "men's clothing":
        setShownProducts(
          products.filter((product) => product.category === "men's clothing")
        );
        break;
      case "women's clothing":
        setShownProducts(
          products.filter((product) => product.category === "women's clothing")
        );
        break;
      case "electronics":
        setShownProducts(
          products.filter((product) => product.category === "electronics")
        );
        break;
      case "jewelery":
        setShownProducts(
          products.filter((product) => product.category === "jewelery")
        );
        break;
      default:
        setShownProducts(products);
    }
  }, [category, products]);

  const cardElements = shownProducts.map((product) => (
    <Card key={product.id}>
      <CardImg src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Details>
        <Price>{`$ ${product.price}`}</Price>
        <Rating>{`Rating (${product.rating.count}) - ${product.rating.rate}/5.0`}</Rating>
      </Details>
      <AddToCart onClick={() => console.log("button")}>Add to Cart</AddToCart>
    </Card>
  ));

  return (
    <Main>
      <Filter>
        <Category
          selected={category === "all"}
          onClick={() => setCategory("all")}
        >
          All
        </Category>
        <Category
          selected={category === "men's clothing"}
          onClick={() => setCategory("men's clothing")}
        >
          Men's Clothing
        </Category>
        <Category
          selected={category === "women's clothing"}
          onClick={() => setCategory("women's clothing")}
        >
          Women's Cloting
        </Category>
        <Category
          selected={category === "electronics"}
          onClick={() => setCategory("electronics")}
        >
          Electronics
        </Category>
        <Category
          selected={category === "jewelery"}
          onClick={() => setCategory("jewelery")}
        >
          Jewelery
        </Category>
      </Filter>
      {cardElements}
    </Main>
  );
};

export default Products;
