import React from "react";

const Button = (props) => {
  return (
    <button className="my-5 px-10 py-3 bg-[#000000] text-[#ffffff] capitalize cursor-pointer rounded-full">
      {props.title}
    </button>
  );
};

export default Button;
