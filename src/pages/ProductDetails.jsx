import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsData } from "../Data/ProductsData";
import ProductInfo from "../components/Products/ProductInfo";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = React.useState(false);
  const product = ProductsData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="px-6 py-20 text-center sm:px-12 lg:px-20">
        <h1 className="font-[PrimaryFont] text-3xl font-bold sm:text-4xl">Product not found</h1>
        <Link to="/store" className="inline-block mt-6 underline">
          Return to store
        </Link>
      </main>
    );
  }

  return (
    <main className="px-4 py-8 sm:px-8 sm:py-10 lg:px-12.5">
      <p className="mb-6 text-sm text-(--text-gray) sm:mb-8 sm:text-base">
        <Link to="/">Home</Link> &gt; Product Details
      </p>
      <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="rounded-xl bg-(--bg-secondary) overflow-hidden flex justify-center items-center">
          <img src={product.image} alt={product.title} className="w-full max-h-155 object-contain" />
        </div>
        <div className="pt-4">
          <h1 className="mb-4 font-[PrimaryFont] text-3xl font-bold sm:text-4xl">{product.title}</h1>
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
          <button
            onClick={() => {
              addToCart(product);
              setIsAdded(true);
            }}
            className="mt-8 w-full rounded-full bg-black py-4 text-white"
          >
            {isAdded ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
