"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { pricingDetails } from "@/utils/pricingData";
import { slideUpByClass } from "@/utils/slideUpAnimation";

const Pricing = () => {
  useEffect(() => {
    slideUpByClass("slide-up-init");
  });

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#F3FFF7",
        backgroundImage: 'url("/images/home/pricing_bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container ms-auto h-full overflow-clip slide-up-init">
        <div className="p-4 lg:p-10 lg:pr-2 flex flex-col h-full ">
          <h2 className="font-inria tracking-tight relative w-fit text-2xl font-bold mb-12">
            Explore Investment Choices{" "}
            <span>
              <Image
                className="absolute -top-0 -right-5"
                src={"/images/home/icons/star-xtrade.svg"}
                alt="start"
                aria-hidden="true"
                width={16}
                height={16}
              />
            </span>
          </h2>

          <div className="w-full h-full relative">
            <div
              aria-hidden="true"
              className="shadowed pointer-events-none absolute inset-y-0 z-[2] right-0 bg-[linear-gradient(to_right,transparent_80%,#F3FFF7_100%)] w-14"
            ></div>

            <Swiper
              spaceBetween={30}
              freeMode={true}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[FreeMode]}
              breakpoints={{
                320: {
                  // mobile
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                640: {
                  // sm screens
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
                768: {
                  // md screens
                  slidesPerView: 2.5,
                  spaceBetween: 25,
                },
                1024: {
                  // lg screens
                  slidesPerView: 3.5,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper h-full !pr-4"
            >
              {pricingDetails.map((details, index) => (
                <SwiperSlide
                  className="h-full flex items-stretch"
                  key={details.id}
                >
                  <div className="card flex flex-col justify-between h-full bg-white">
                    <div className="p-4 min-h-[333px] rounded-xl  border border-b-0 rounded-bl-none rounded-br-none border-brand">
                      <div className="relative h-7">
                        <span className="text-sm absolute -right-6  inline-block py-0.5 px-2 rounded-[0.0313rem] bg-brand text-white">
                          {details.planName}
                        </span>
                      </div>
                      <div>
                        <ul className="text-sm lg:text-[16px] ps-6 space-y-2 list-disc">
                          {details.planDetails.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="w-full block text-center rounded-bl-xl text-white font-inria text-2xl font-bold rounded-br-xl border border-[#BCFFEC] bg-[linear-gradient(90deg,#00D094_0%,#00AD7B_100%)] p-2"
                    >
                      {details.planAmount}
                    </a>
                  </div>
                </SwiperSlide>
              ))}
              {/* <SwiperSlide className="h-full">
                <div className="card bg-white  ">
                  <div className="p-4 rounded-xl  border border-b-0 rounded-bl-none rounded-br-none border-brand">
                    <div className="relative h-7">
                      <span className="text-sm absolute -right-6  inline-block py-0.5 px-2 rounded-[0.0313rem] bg-brand text-white">
                        ELITE
                      </span>
                    </div>
                    <div>
                      <ul className="ps-6 space-y-2 list-disc">
                        <li>Trading leverage 1:1000</li>
                        <li>Icon Ultra-low spread / Raw spread</li>
                        <li>Icon $1.5 per lot</li>
                        <li>Icon Dedicated Account Manager</li>
                        <li>Icon Exclusive daily market reports</li>
                        <li>Icon Custom trading conditions</li>
                        <li>
                          Icon Trade: Forex, Commodity, Crypto, Indices, Stocks
                        </li>
                        <li>Icon Special promotions & rewards</li>
                      </ul>
                    </div>
                  </div>
                  <button className="w-full rounded-bl-xl text-white font-inria text-2xl font-bold rounded-br-xl border border-[#BCFFEC] bg-[linear-gradient(90deg,#00D094_0%,#00AD7B_100%)] p-2">
                    $250000
                  </button>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
