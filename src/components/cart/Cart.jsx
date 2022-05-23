import React from "react";
import {
  Main,
  CardImg,
  Details,
  Price,
  Rating,
  Title,
  AddToCart as RemoveFromCart,
  Filter as Actions,
} from "../products/products.style";

import { CartCard, EmptyStatement, Button, Badge } from "./cart.style";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeItemFromCart, setSelectedTab, emptyCart }) => {
  const navigate = useNavigate();

  const cardElements = cart.map((item) => {
    return (
      <CartCard key={item.id}>
        <CardImg src={item.product.image} alt={item.product.title} />
        <Title>{item.product.title}</Title>
        <Details>
          <Price>{`$ ${item.product.price}`}</Price>
          <Rating>{`Rating (${item.product.rating.count}) - ${item.product.rating.rate}/5.0`}</Rating>
        </Details>
        <RemoveFromCart onClick={() => removeItemFromCart(item.product.id)}>
          Remove From Cart
        </RemoveFromCart>
        {item.count > 1 && <Badge>{item.count}</Badge>}
      </CartCard>
    );
  });

  function calculateTotal() {
    let sum = 0;
    cart.forEach((item) => (sum += item.product.price * item.count));
    return sum.toFixed(2);
  }

  return cart.length ? (
    <Main>
      <Actions>
        <Button type="primary">{`Checkout (Subtotal $${calculateTotal()})`}</Button>
        <Button onClick={emptyCart}>Empty Cart</Button>
      </Actions>
      {cardElements}
    </Main>
  ) : (
    <EmptyStatement>
      There is nothing in your cart 😪...
      <Button
        type="primary"
        func="nav"
        onClick={() => {
          navigate("/products");
          setSelectedTab("products");
        }}
      >
        View Products
      </Button>
    </EmptyStatement>
  );
};

export default Cart;
