import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsData } from "../Data/ProductsData";
import ProductInfo from "../components/Products/ProductInfo";

const ProductDetails = () => {
  const { id } = useParams();
  const product = ProductsData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="px-12.5 py-20 text-center">
        <h1 className="font-[PrimaryFont] text-4xl font-bold">Product not found</h1>
        <Link to="/store" className="inline-block mt-6 underline">
          Return to store
        </Link>
      </main>
    );
  }

  return (
    <main className="px-12.5 py-10">
      <p className="mb-8 text-(--text-gray)">
        <Link to="/">Home</Link> &gt; Product Details
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="rounded-xl bg-(--bg-secondary) overflow-hidden flex justify-center items-center">
          <img src={product.image} alt={product.title} className="w-full max-h-155 object-contain" />
        </div>
        <div className="pt-4">
          <h1 className="font-[PrimaryFont] text-4xl font-bold mb-4">{product.title}</h1>
          <ProductInfo
            title=""
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            rating={product.rating}
          />
          <p className="mt-8 text-(--text-gray)">
            A carefully crafted piece designed to bring comfort and character to your everyday style.
          </p>
          <button className="mt-8 w-full rounded-full bg-black py-4 text-white">
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
