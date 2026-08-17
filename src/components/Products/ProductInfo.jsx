import React from "react";

const ProductInfo = ({ title, price, originalPrice, discount, rating }) => {
  return (
    <div className="text-left px-2 w-[18vw]">
      <h1 className="font-bold text-lg whitespace-nowrap">{title}</h1>
      {/* Rating System */}
      <div className="flex items-center gap-1">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => {
            const filled = i < Math.round(rating); // 0-based index
            return (
              <span
                key={i}
                className={filled ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            );
          })}
        </div>
        <span className="text-(--text-gray) text-sm">{rating}/5</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-sm">₹{price}</span>
        {originalPrice && (
          <span className="text-(--text-gray) line-through">
            ₹{originalPrice}
          </span>
        )}
        {discount && (
          <span className="text-red-500 bg-red-100 rounded-full px-2 text-xs">
            {discount}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
