import React from "react";

const ProductImage = ({ image }) => {
  return (
    <div className="w-[18vw] rounded-xl bg-(--bg-secondary) overflow-hidden flex justify-center items-center">
      <img
        src={image}
        alt="Hight quality gray color half t-shirt"
        className="object-cover h-[20vw] transform hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

export default ProductImage;
