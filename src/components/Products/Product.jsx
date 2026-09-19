import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const Product = ({ product_info }) => {
  return (
    <Link
      to={`/product/${product_info.id}`}
      className="flex flex-col justify-center items-center"
    >
      <ProductImage image={product_info.image} />
      <ProductInfo
        title={product_info.title}
        price={product_info.price}
        originalPrice={product_info.originalPrice}
        discount={product_info.discount}
        rating={product_info.rating}
      />
    </Link>
  );
};

export default Product;
