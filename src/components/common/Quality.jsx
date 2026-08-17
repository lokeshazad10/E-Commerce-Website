import React from "react";

const Quality = (props) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-[PrimaryFont]">{props.title}</h1>
      <p className="text-(--text-gray) text-lg font-[SecondaryFont]">
        {props.description}
      </p>
    </div>
  );
};

export default Quality;
