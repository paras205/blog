import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions/cart";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      {item.title}
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
};

export default ProductCard;
