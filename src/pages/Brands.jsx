import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const brands = [
  {
    name: "VERSACE",
    font: "VersaceFont",
    description: "Bold Italian glamour with a confident edge.",
  },
  {
    name: "ZARA",
    font: "ZaraFont",
    description: "Contemporary essentials made for everyday movement.",
  },
  {
    name: "GUCCI",
    font: "GucciFont",
    description: "Expressive pieces where tradition meets imagination.",
  },
  {
    name: "PRADA",
    font: "PradaFont",
    description: "Clean, intelligent design with a modern point of view.",
  },
  {
    name: "Calvin Klein",
    font: "CKFont",
    description: "Minimal style, refined silhouettes, and lasting comfort.",
  },
];

const Brands = () => {
  return (
    <main className="px-6 md:px-12.5 py-10 min-h-[60vh]">
      <p className="mb-8 text-(--text-gray)">
        <Link to="/">Home</Link> &gt; Brands
      </p>
      <section className="bg-black text-white rounded-3xl px-6 md:px-14 py-16 mb-12 overflow-hidden">
        <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-4">Our edit</p>
        <h1 className="font-[PrimaryFont] text-4xl md:text-6xl font-bold max-w-3xl">
          Brands with a point of view.
        </h1>
        <p className="mt-6 max-w-xl text-white/70 text-lg">
          Discover the names shaping modern wardrobes, from expressive icons to everyday essentials.
        </p>
      </section>

      <section>
        <div className="flex justify-between items-end gap-4 mb-6">
          <div>
            <p className="text-(--text-gray)">Explore the collection</p>
            <h2 className="font-[PrimaryFont] text-3xl font-bold mt-1">Featured brands</h2>
          </div>
          <Link to="/store" className="hidden sm:flex items-center gap-2 underline underline-offset-4">
            View all products <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((brand) => (
            <article key={brand.name} className="min-h-56 rounded-2xl border border-[#e4e4e4] p-7 flex flex-col justify-between hover:bg-(--bg-secondary) transition-colors">
              <div>
                <h3 style={{ fontFamily: brand.font }} className="text-4xl">{brand.name}</h3>
                <p className="text-(--text-gray) mt-5 max-w-xs">{brand.description}</p>
              </div>
              <Link to="/store" className="mt-8 inline-flex items-center gap-2 font-medium">
                Shop the edit <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Brands;