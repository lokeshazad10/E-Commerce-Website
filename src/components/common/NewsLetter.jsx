import React from "react";
import Header from "../Header";

const NewsLetter = () => {
  return (
    <div className="w-full bg-black p-10 rounded-2xl flex">
      <div className="w-1/2 font-[PrimaryFont] text-white text-4xl font-bold">
        <h1>stay upto date about our latest offers</h1>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <form action="" className="flex flex-col gap-5 w-[70%]">
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
