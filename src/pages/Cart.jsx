import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";

const Cart = () => {
  return (
    <main className="px-6 md:px-12.5 py-10 min-h-[60vh]">
      <p className="mb-8 text-(--text-gray)">
        <Link to="/">Home</Link> &gt; Cart
      </p>
      <h1 className="font-[PrimaryFont] text-4xl font-bold mb-8">Your cart</h1>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
        <div className="min-h-80 rounded-2xl border border-[#e4e4e4] flex flex-col justify-center items-center text-center p-8">
          <ShoppingBag size={48} strokeWidth={1.5} className="mb-5" />
          <h2 className="font-[PrimaryFont] text-2xl font-bold">Your cart is empty</h2>
          <p className="text-(--text-gray) mt-2 mb-6">Add something you love and it will appear here.</p>
          <Link to="/store" className="rounded-full bg-black text-white px-8 py-3 inline-flex items-center gap-2">
            Start shopping <ArrowRight size={17} />
          </Link>
        </div>

        <aside className="rounded-2xl bg-(--bg-secondary) p-6">
          <h2 className="font-[PrimaryFont] text-2xl font-bold mb-6">Order summary</h2>
          <div className="flex justify-between text-(--text-gray)">
            <span>Subtotal</span>
            <span>₹0</span>
          </div>
          <div className="flex justify-between text-(--text-gray) mt-4">
            <span>Delivery</span>
            <span>₹0</span>
          </div>
          <div className="border-t border-[#d8d8d8] mt-6 pt-5 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹0</span>
          </div>
          <button disabled className="w-full mt-6 rounded-full bg-black/30 text-white py-3 cursor-not-allowed">
            Go to checkout
          </button>
        </aside>
      </section>
    </main>
  );
};

export default Cart;
