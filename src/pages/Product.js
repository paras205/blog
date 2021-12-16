import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../store/actions/product";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getProducts = async () => {
    setLoading(true);
    await dispatch(getAllProducts());
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const { products } = useSelector((state) => state.product);
  if (loading) {
    return <p>loader</p>;
  }
  return (
    <div>
      {products.map((item, idx) => {
        return <ProductCard item={item} key={idx} />;
      })}
    </div>
  );
};

export default Product;
