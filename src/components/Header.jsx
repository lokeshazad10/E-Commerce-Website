import React from "react";

const Header = (props) => {
  return (
    <div className="w-screen text-center my-10">
      <h1 className="font-[PrimaryFont] text-4xl font-bold">{props.title}</h1>
    </div>
  );
};

export default Header;
