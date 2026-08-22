import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import customerReviews from "../../Data/ReviewsData";
import Rating from "../Products/Rating";
import { Check } from "lucide-react";

const Slider = () => {
  const truncateWord = (text) => {
    const limit = 20;
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      // style={{
      //   width: "100%",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   gap: "5",
      // }}
      className="w-full flex justify-center item-center gap-5"
    >
      {customerReviews.map((review_data) => (
        <SwiperSlide className="select-none !h-[300px] !w-[300px] bg-(--bg-secondary) rounded-xl p-5 border-2 border-gray-300">
          <div>
            <Rating rating={review_data.rating} />
            <div className="flex gap-2">
              <h1 className="font-bold">{review_data.name}</h1>
              <span
                className={`flex justify-center items-center rounded-full h-5 w-5 ${review_data.verified ? "bg-green-500" : "bg-gray-500"}`}
              >
                <Check color="#ffffff" size={15} />
              </span>
            </div>
          </div>
          <div>
            <p>{truncateWord(review_data.text)}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
