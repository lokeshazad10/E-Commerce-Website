import React from "react";
import NewsLetter from "./common/NewsLetter";
import FooterInfo from "./common/FooterInfo";

const Footer = () => {
  return (
    <footer className="relative bg-(--bg-secondary) mt-30 flex justify-center items-center flex-col">
      <div className="absolute -top-32 w-[calc(100%-2rem)] sm:-top-25 sm:w-[80%]">
        <NewsLetter />
      </div>
      <div className="mt-40 w-full px-4 sm:mt-30 sm:w-[90%] sm:px-0">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full px-2 md:w-[25%] md:px-5">
            <h1 className="font-[PrimaryFont] font-bold text-2xl py-1.5">
              shop.co
            </h1>
            <p className="text-(--text-gray) py-1.5">
              We have clothes that suits your style and which you,re proud to
              wear. From women to men
            </p>
            <div className="flex items-center gap-5 py-1.5">
              <a href="" className="w-5">
                <img src="social_icons/twitter.png" alt="" />
              </a>
              <a href="" className="w-5">
                <img src="social_icons/facebook.png" alt="" />
              </a>
              <a href="" className="w-5">
                <img src="social_icons/instagram.png" alt="" />
              </a>
              <a href="" className="w-5">
                <img src="social_icons/github.png" alt="" />
              </a>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-y-8 md:w-[75%] md:grid-cols-4">
            <FooterInfo
              title="company"
              listArray={["About", "Features", "Works", "Career"]}
            />
            <FooterInfo
              title="help"
              listArray={[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ]}
            />
            <FooterInfo
              title="faq"
              listArray={["Account", "Manage Deliveries", "Orders", "Payments"]}
            />
            <FooterInfo
              title="resources"
              listArray={[
                "Free eBooks",
                "Development Tutorial",
                "How to Blog",
                "Youtube Playlist",
              ]}
            />
          </div>
        </div>
        <div className="relative my-10 flex flex-col items-start gap-4 border-t-2 border-t-[#e4e4e4] p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-(--text-gray) sm:text-base">
            Shop.co © 2000-2026, All Rights Reserved.
          </p>
          <img
            src="/payments.png"
            alt=""
            className="relative right-auto bottom-auto w-64 sm:absolute sm:right-5 sm:-bottom-10 sm:w-100"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
