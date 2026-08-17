import React from "react";

const FooterInfo = ({ title, listArray }) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-[SecondaryFont] uppercase text-xl font-bold">
        {title}
      </h1>
      <ul className="text-(--text-gray)">
        <li>{listArray[0]}</li>
        <li>{listArray[1]}</li>
        <li>{listArray[2]}</li>
        <li>{listArray[3]}</li>
      </ul>
    </div>
  );
};

export default FooterInfo;
