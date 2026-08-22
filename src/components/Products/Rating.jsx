import React from "react";

const Rating = ({ rating }) => {
  return (
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
  );
};

export default Rating;
