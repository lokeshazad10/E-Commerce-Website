import React from "react";

const StyleCard = ({ title, imageUrl, spanClass }) => {
  return (
    <div
      className={`relative bg-white rounded-3xl overflow-hidden h-70 shadow-sm ${spanClass} hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
    >
      <h1 className="absolute top-6 left-8 text-2xl font-bold text-black z-10">
        {title}
      </h1>
      <img
        src={imageUrl}
        alt={`${title} Style`}
        className="absolute inset-0 w-full h-full object-cover object-top-right"
      />
    </div>
  );
};

export default StyleCard;
