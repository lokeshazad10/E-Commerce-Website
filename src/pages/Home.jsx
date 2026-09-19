import React from "react";
import BrandStripe from "../components/Home/BrandStripe";
import HeroImage from "../assets/images/hero.png";
import Button from "../components/common/Button";
import Quality from "../components/common/Quality";
import Sparkle from "../components/common/Sparkle";
import { motion } from "motion/react";
import Header from "../components/Header";
import Product from "../components/Products/Product";
import {ProductsData} from "../Data/ProductsData";
import customerReviews from "../Data/ReviewsData";
import Footer from "../components/Footer";
import StyleCard from "../components/common/StyleCard";
import Slider from "../components/common/ReviewSlider";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="overflow-hidden">
    <section className="w-full px-6 bg-(--bg-secondary) flex">
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
        <Link to="/store">
          <Button title="Shop Now" />
        </Link>
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
        {ProductsData.map((item) => {
          return item.tag === "New" ? <Product key={item.id} product_info={item} /> : null;
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
        {ProductsData.map((item) => {
          return item.tag === "Top Selling" ? <Product key={item.id} product_info={item} /> : null;
        })}
      </div>
      <div className="w-full text-center">
        <Link to="/store">
          <Button title="View All" />
        </Link>
      </div>
    </section>

    {/* category section */}
    <section className="p-20">
      <div className="bg-(--bg-secondary) flex flex-col justify-center items-center rounded-3xl">
        <Header title="browse by dress style" />
        <div className="w-full pb-10 px-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7">
          <StyleCard
            title="Casual"
            imageUrl="/browse_style/casual.png"
            spanClass="md:col-span-5"
          />
          <StyleCard
            title="Formal"
            imageUrl="/browse_style/formal.png"
            spanClass="md:col-span-7"
          />
          <StyleCard
            title="Party"
            imageUrl="/browse_style/party.png"
            spanClass="md:col-span-7"
          />
          <StyleCard
            title="Gym"
            imageUrl="/browse_style/gym.png"
            spanClass="md:col-span-5"
          />
        </div>
      </div>
    </section>

    {/* review section  */}
    <section className="px-20 pb-20">
      <Header title="our happy customers" width="fit-content" text="text-3xl" />
      <div className="py-20">
        <Slider />
      </div>
    </section>
  </div>
);

export default Home;
