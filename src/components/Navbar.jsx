import { useState } from "react";
import { ShoppingCart, CircleUserRound, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Store", to: "/store" },
    { label: "On Sale", to: "/sale" },
    { label: "New Arrivals" },
    { label: "Brands", to: "/brands" },
  ];

  return (
    <nav className="relative flex flex-wrap items-center justify-between gap-x-3 gap-y-3 px-4 py-4 md:flex-nowrap md:gap-4">
      <Link to="/" className="shrink-0">
        <h1 className="font-[PrimaryFont] text-xl font-bold sm:text-2xl">
          SHOP.CO
        </h1>
      </Link>
      <ul className="hidden shrink-0 items-center gap-3 text-sm md:flex lg:gap-5 lg:text-base">
        {links.map(({ label, to }) => (
          <li
            key={label}
            className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {to ? <Link to={to}>{label}</Link> : label}
          </li>
        ))}
      </ul>
      {menuOpen && (
        <ul className="absolute left-4 right-4 top-full z-50 flex flex-col gap-3 rounded-md border border-gray-200 bg-white p-4 text-sm shadow-lg motion-reduce:animate-none md:hidden animate-[mobile-menu-enter_180ms_ease-out_both]">
          {links.map(({ label, to }) => (
            <li key={label}>
              {to ? (
                <Link to={to} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ) : (
                label
              )}
            </li>
          ))}
        </ul>
      )}
      <div className="order-last flex h-10 min-w-0 basis-full items-center gap-2 rounded-full bg-(--bg-secondary) px-3 focus-within:ring-2 focus-within:ring-(--primary) focus-within:ring-offset-2 md:order-0 md:flex-1 lg:max-w-md">
        <Search color="#9c9c9c" />
        <input
          type="search"
          placeholder="Search for products"
          className="h-full min-w-0 w-full border-none outline-none focus:border-none focus:outline-none focus:ring-0"
        />
      </div>
      <div className="order-3 flex shrink-0 items-center gap-3 md:order-0 md:gap-4">
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
        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
