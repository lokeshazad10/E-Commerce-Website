import React from "react";
import { ShoppingCart, CircleUserRound, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-5 m-6 h-12">
      <Link to="/">
        <h1 className="font-[PrimaryFont] text-2xl font-bold">SHOP.CO</h1>
      </Link>
      <ul className="flex gap-6 px-5">
        <Link to="/store">Store</Link>
        <Link to="/sale">On Sale</Link>
        <li>New Arrivals</li>
        <Link to="/brands">Brands</Link>
      </ul>
      <div className="w-xl h-10 flex justify-center items-center bg-(--bg-secondary) px-2 rounded-full gap-2 focus-within:ring-2 focus-within:ring-(--primary) focus-within:ring-offset-2">
        <Search color="#9c9c9c" />
        <input
          type="search"
          placeholder="Search for products"
          className="w-full h-full border-none outline-none focus:border-none focus:outline-none focus:ring-0 "
        />
      </div>
      <div className="flex justify-center items-center gap-6">
        <Link to="/cart">
          <ShoppingCart className="cursor-pointer" />
        </Link>
        <Link to="/account">
          <CircleUserRound className="cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
