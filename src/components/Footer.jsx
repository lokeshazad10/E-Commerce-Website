import React from "react";
import NewsLetter from "./common/NewsLetter";
import FooterInfo from "./common/FooterInfo";

const Footer = () => {
  return (
    <footer className="w-screen relative bg-(--bg-secondary) mt-30 flex justify-center items-center flex-col">
      <div className="w-[80%] absolute -top-25">
        <NewsLetter />
      </div>
      <div className="mt-30">
        <div className="flex gap-5">
          <div className="w-[25%] px-5">
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
          <div className="w-[75%] grid grid-cols-4">
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
        <div className="my-10 p-5 border-t-2 border-t-[#e4e4e4] flex justify-between items-center relative">
          <p className="text-(--text-gray)">
            Shop.co © 2000-2026, All Rights Reserved.
          </p>
          <img
            src="/payments.png"
            alt=""
            className="w-100 absolute right-5 -bottom-10"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
