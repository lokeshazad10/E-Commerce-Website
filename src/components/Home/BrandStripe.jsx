import React from "react";

const BrandStripe = () => {
  return (
    <div className="grid min-h-16 w-full grid-cols-2 items-center gap-x-4 gap-y-2 bg-[#000000] px-3 py-3 text-[#ffffff] sm:flex sm:h-20 sm:gap-0 sm:px-0 sm:py-0">
      <h1 className="text-center text-xl font-[VersaceFont] sm:text-5xl">VERSACE</h1>
      <h1 className="text-center text-xl font-[ZaraFont] sm:text-5xl">ZARA</h1>
      <h1 className="text-center text-xl font-[GucciFont] sm:text-5xl">GUCCI</h1>
      <h1 className="text-center text-xl font-[PradaFont] sm:text-5xl">PRADA</h1>
      <h1 className="col-span-2 text-center text-xl font-[CKFont] sm:col-span-1 sm:text-5xl">Calvin Klein</h1>
    </div>
  );
};

export default BrandStripe;
