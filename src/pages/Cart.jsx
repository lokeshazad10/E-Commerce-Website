import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, subtotal, updateQuantity, removeFromCart } = useCart();

  return (
    <main className="px-6 md:px-12.5 py-10 min-h-[60vh]">
      <p className="mb-8 text-(--text-gray)">
        <Link to="/">Home</Link> &gt; Cart
      </p>
      <h1 className="font-[PrimaryFont] text-4xl font-bold mb-8">Your cart</h1>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
        {cartItems.length === 0 ? (
          <div className="min-h-80 rounded-2xl border border-[#e4e4e4] flex flex-col justify-center items-center text-center p-8">
            <ShoppingBag size={48} strokeWidth={1.5} className="mb-5" />
            <h2 className="font-[PrimaryFont] text-2xl font-bold">Your cart is empty</h2>
            <p className="text-(--text-gray) mt-2 mb-6">Add something you love and it will appear here.</p>
            <Link to="/store" className="rounded-full bg-black text-white px-8 py-3 inline-flex items-center gap-2">
              Start shopping <ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#e4e4e4] p-4 sm:p-6">
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <article key={item.id} className="flex gap-4 border-b border-[#e4e4e4] pb-6 last:border-0 last:pb-0">
                  <img src={item.image} alt={item.title} className="h-24 w-24 rounded-xl bg-(--bg-secondary) object-contain sm:h-32 sm:w-32" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="font-[PrimaryFont] text-lg font-bold sm:text-xl">{item.title}</h2>
                      <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.title}`} className="text-(--text-gray) hover:text-black">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="mt-2 font-bold">₹{item.price}</p>
                    <div className="mt-4 flex w-fit items-center gap-3 rounded-full bg-(--bg-secondary) px-3 py-1.5">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label={`Decrease ${item.title} quantity`}>
                        <Minus size={15} />
                      </button>
                      <span className="min-w-5 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Increase ${item.title} quantity`}>
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <aside className="rounded-2xl bg-(--bg-secondary) p-6">
          <h2 className="font-[PrimaryFont] text-2xl font-bold mb-6">Order summary</h2>
          <div className="flex justify-between text-(--text-gray)">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-(--text-gray) mt-4">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="border-t border-[#d8d8d8] mt-6 pt-5 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{subtotal}</span>
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
