import React from "react";
import Header from "../Header";

const NewsLetter = () => {
  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl bg-black p-6 sm:p-10 md:flex-row">
      <div className="w-full font-[PrimaryFont] text-3xl font-bold text-white sm:text-4xl md:w-1/2">
        <h1>stay upto date about our latest offers</h1>
      </div>
      <div className="flex w-full items-center justify-center md:w-1/2">
        <form action="" className="flex w-full flex-col gap-5 sm:w-[70%]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-full font-bold px-5 py-2 rounded-full border-none bg-(--bg-secondary) outline-none focus:border-none focus:outline-none focus:ring-0"
          />
          <button className="bg-(--bg) font-bold cursor-pointer px-2.5 py-2 rounded-full">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
