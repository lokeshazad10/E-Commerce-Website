import React from "react";
import { ShoppingCart, CircleUserRound, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <nav className="flex flex-wrap justify-center items-center gap-4 px-4 py-4 sm:gap-5 sm:m-6 sm:h-12">
      <Link to="/">
        <h1 className="font-[PrimaryFont] text-xl sm:text-2xl font-bold">SHOP.CO</h1>
      </Link>
      <ul className="order-3 flex w-full justify-center gap-4 px-1 text-sm sm:order-0 sm:w-auto sm:gap-6 sm:px-5 sm:text-base">
        <Link to="/store">Store</Link>
        <Link to="/sale">On Sale</Link>
        <li>New Arrivals</li>
        <Link to="/brands">Brands</Link>
      </ul>
      <div className="order-2 flex h-10 min-w-0 flex-1 basis-40 justify-center items-center gap-2 rounded-full bg-(--bg-secondary) px-2 focus-within:ring-2 focus-within:ring-(--primary) focus-within:ring-offset-2 sm:order-0 sm:max-w-[45vw] sm:flex-none md:w-xl md:max-w-none">
        <Search color="#9c9c9c" />
        <input
          type="search"
          placeholder="Search for products"
          className="w-full h-full border-none outline-none focus:border-none focus:outline-none focus:ring-0 "
        />
      </div>
      <div className="flex justify-center items-center gap-4 sm:gap-6">
        <Link to="/cart">
          <span className="relative block">
            <ShoppingCart className="cursor-pointer" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-xs text-white">
                {itemCount}
              </span>
            )}
          </span>
        </Link>
        <Link to="/account">
          <CircleUserRound className="cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
