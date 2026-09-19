import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Products/Product";
import { ProductsData } from "../Data/ProductsData";

const OnSale = () => {
  const saleProducts = ProductsData.filter((product) => product.discount);

  return (
    <main className="px-6 md:px-12.5 py-10 min-h-[60vh]">
      <p className="mb-8 text-(--text-gray)">
        <Link to="/">Home</Link> &gt; On Sale
      </p>
      <div className="mb-10">
        <p className="uppercase tracking-[0.25em] text-sm text-(--text-gray) mb-3">Limited prices</p>
        <h1 className="font-[PrimaryFont] text-4xl md:text-5xl font-bold">On sale</h1>
        <p className="text-(--text-gray) mt-4 max-w-xl">
          Refresh your wardrobe with selected styles at prices worth making room for.
        </p>
      </div>

      {saleProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {saleProducts.map((product) => (
            <Product key={product.id} product_info={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#e4e4e4] p-12 text-center">
          <h2 className="font-[PrimaryFont] text-2xl font-bold">No sale items right now</h2>
          <Link to="/store" className="inline-block mt-5 underline underline-offset-4">
            Browse the full store
          </Link>
        </div>
      )}
    </main>
  );
};

export default OnSale;