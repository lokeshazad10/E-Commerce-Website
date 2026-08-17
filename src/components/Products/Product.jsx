import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const Product = ({ product_info }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ProductImage image={product_info.image} />
      <ProductInfo
        title={product_info.title}
        price={product_info.price}
        originalPrice={product_info.originalPrice}
        discount={product_info.discount}
        rating={product_info.rating}
      />
    </div>
  );
};

export default Product;
