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
    <section className="flex w-full flex-col bg-(--bg-secondary) px-4 text-center sm:px-8 md:flex-row md:px-6 md:text-left">
      <div className="w-full pt-12 sm:pt-16 md:w-1/2 md:pl-10 md:pt-20">
        <div className="font-[PrimaryFont] text-4xl font-bold leading-tight sm:text-5xl lg:text-[64px] lg:leading-15">
          find clothes
        </div>
        <div className="font-[PrimaryFont] text-4xl font-bold leading-tight sm:text-5xl lg:text-[64px] lg:leading-15">
          that matches
        </div>
        <div className="font-[PrimaryFont] text-4xl font-bold leading-tight sm:text-5xl lg:text-[64px] lg:leading-15">
          your style
        </div>
        <p className="pt-6 text-base text-(--text-gray) sm:pt-10 sm:text-lg">
          Browse through our diverse range of meticulousily crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link to="/store">
          <Button title="Shop Now" />
        </Link>
        <div className="grid grid-cols-1 gap-3 pb-10 sm:grid-cols-3 sm:gap-5 md:pb-0">
          <Quality title="200+" description="International Brands" />
          <Quality title="2,000+" description="High Quality Products" />
          <Quality title="30,000+" description="Happpy Customers" />
        </div>
      </div>
      <div className="relative flex w-full items-end justify-center md:w-1/2">
        <img
          className="w-full max-w-md object-cover md:w-[40vw]"
          src={HeroImage}
          alt="hero section image"
        />
        <Sparkle className="absolute top-60 left-10" />
        <Sparkle size={124} className="absolute top-20 right-0" />
      </div>
    </section>
    <BrandStripe />

    {/* new arrivals section  */}
    <section className="w-full border-t-2 border-t-[#e4e4e4] py-12 sm:py-20">
      <Header title="New Arrivals" text="text-3xl sm:text-4xl" />
      {/* product grid */}
      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-8 px-4 py-10 sm:gap-5 sm:px-8 sm:py-15 lg:grid-cols-4 lg:px-20">
        {ProductsData.map((item) => {
          return item.tag === "New" ? <Product key={item.id} product_info={item} /> : null;
        })}
      </div>
      <div className="w-full text-center">
        <Button title="View All" />
      </div>
    </section>

    {/* top selling section  */}
    <section className="w-full border-t-2 border-t-[#e4e4e4]">
      <Header title="top selling" text="text-3xl sm:text-4xl" />
      {/* product grid */}
      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-8 px-4 py-10 sm:gap-5 sm:px-8 sm:py-15 lg:grid-cols-4 lg:px-20">
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
    <section className="px-4 py-10 sm:px-8 sm:py-16 lg:p-20">
      <div className="flex flex-col items-center justify-center rounded-3xl bg-(--bg-secondary)">
        <Header title="browse by dress style" text="text-3xl sm:text-4xl" />
        <div className="grid w-full grid-cols-1 gap-5 px-5 pb-8 sm:px-10 md:grid-cols-12 md:gap-7 md:pb-10">
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
    <section className="px-4 pb-12 sm:px-8 sm:pb-20 lg:px-20">
      <Header title="our happy customers" width="fit-content" text="text-2xl sm:text-3xl" />
      <div className="py-10 sm:py-20">
        <Slider />
      </div>
    </section>
  </div>
);

export default Home;
