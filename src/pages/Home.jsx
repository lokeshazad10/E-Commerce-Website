import React from "react";
import BrandStripe from "../components/Home/BrandStripe";
import HeroImage from "../assets/images/hero.png";
import Button from "../components/common/Button";
import Quality from "../components/common/Quality";
import Sparkle from "../components/common/Sparkle";
import { motion } from "motion/react";
import Header from "../components/Header";
import Product from "../components/Products/Product";
import {
  NewArrivalProductsData,
  TopSellingProductsData,
} from "../Data/ProductsData";
import Footer from "../components/Footer";

const Home = () => (
  <div className="overflow-hidden">
    <section className="w-full h-screen px-6 bg-(--bg-secondary) flex">
      <div className="w-1/2 pl-10 pt-20">
        <div className="font-[PrimaryFont] font-bold text-[64px] leading-15">
          find clothes
        </div>
        <div className="font-[PrimaryFont] font-bold text-[64px] leading-15">
          that matches
        </div>
        <div className="font-[PrimaryFont] font-bold text-[64px] leading-15">
          your style
        </div>
        <p className=" text-lg pt-10 text-(--text-gray)">
          Browse through our diverse range of meticulousily crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button title="Shop Now" />
        <div className="grid grid-cols-3 gap-5">
          <Quality title="200+" description="International Brands" />
          <Quality title="2,000+" description="High Quality Products" />
          <Quality title="30,000+" description="Happpy Customers" />
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-end relative">
        <img
          className="object-cover w-[40vw]"
          src={HeroImage}
          alt="hero section image"
        />
        <Sparkle className="absolute top-60 left-10" />
        <Sparkle size={124} className="absolute top-20 right-0" />
      </div>
    </section>
    <BrandStripe />

    {/* new arrivals section  */}
    <section className="w-screen py-20 border-t-2 border-t-[#e4e4e4]">
      <Header title="New Arrivals" />
      {/* product grid */}
      <div className="w-full grid grid-cols-4 py-15 px-20">
        {NewArrivalProductsData.map((item) => {
          return <Product key={item.id} product_info={item} />;
        })}
      </div>
      <div className="w-full text-center">
        <Button title="View All" />
      </div>
    </section>

    {/* top selling section  */}
    <section className="w-screen border-t-2 border-t-[#e4e4e4]">
      <Header title="top selling" />
      {/* product grid */}
      <div className="w-full grid grid-cols-4 py-15 px-20">
        {TopSellingProductsData.map((item) => {
          return <Product key={item.id} product_info={item} />;
        })}
      </div>
      <div className="w-full text-center">
        <Button title="View All" />
      </div>
    </section>

    {/* category section */}
    <section></section>

    {/* footer  */}
    <Footer />
  </div>
);

export default Home;
