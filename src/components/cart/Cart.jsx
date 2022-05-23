import React, { useEffect, useState } from "react";
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
import Modal from "./Modal";

const Cart = ({
  cart,
  removeItemFromCart,
  setSelectedTab,
  emptyCart,
  setCart,
}) => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => setModalVisible(false), []);

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

  function handleCheckout() {
    setModalVisible(true);
    setTimeout(() => {
      navigate("/");
      setSelectedTab("home");
      setCart([]);
    }, 2000);
  }

  return cart.length ? (
    <Main>
      <Actions>
        <Button
          type="primary"
          onClick={handleCheckout}
        >{`Checkout (Subtotal $${calculateTotal()})`}</Button>
        <Button onClick={emptyCart}>Empty Cart</Button>
      </Actions>
      {cardElements}
      {modalVisible && <Modal />}
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
