import React from "react";

const Header = ({ title, width = "w-screen", text = "text-4xl" }) => {
  return (
    <div className={`${width} text-center my-10`}>
      <h1 className={`font-[PrimaryFont] ${text} font-bold`}>{title}</h1>
    </div>
  );
};

export default Header;
