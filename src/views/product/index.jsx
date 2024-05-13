import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductById } from "../../store/selectors";

export const Product = () => {
  const { itemId } = useParams();
  const product = useSelector(getProductById(itemId));

  console.log(product);

  // ### /products/${itemId}     - ссылка на первый продукт

  return <div>product name {product?.title}</div>;
};
