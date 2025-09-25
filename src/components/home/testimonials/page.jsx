"use client";
import { slideUpByClass } from "@/utils/slideUpAnimation";
import React, { useEffect, useRef } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const videoRef = useRef(null);

  function handleMouseEnter(e) {
    e.currentTarget.controls = true;
  }

  function handleMouseLeave(e) {
    e.currentTarget.controls = false;
  }

  useEffect(() => {
    slideUpByClass("slide-up-init");

    const handleFullscreenChange = () => {
      const video =
        document.fullscreenElement || document.webkitFullscreenElement;

      if (video && video.tagName === "VIDEO") {
        video.classList.remove("object-cover");
        video.classList.add("object-contain");
      } else {
        document.querySelectorAll("video").forEach((vid) => {
          vid.classList.remove("object-contain");
          vid.classList.add("object-cover");
        });
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="p-4 lg:p-10 lg:pt-0">
        <h2 className="font-inria slide-up-init tracking-tight relative w-fit text-2xl font-bold mb-12">
          Our Customer Testimonials
        </h2>
        <div>
          <Swiper
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 20 },
              640: { slidesPerView: 1.8, spaceBetween: 30 },
              768: { slidesPerView: 2.5, spaceBetween: 30 },
              1024: { slidesPerView: 3.5, spaceBetween: 30 },
            }}
            className="mySwiper h-full"
          >
            {[1, 2].map((index) => (
              <SwiperSlide key={index} className="h-full slide-up-init">
                <div className="">
                  <div className="size-[320px] rounded-lg overflow-hidden scale-[.95] hover:scale-[1] transition-all duration-150 ease-in-out">
                    <video
                      ref={videoRef}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      muted
                      playsInline
                      loop
                      preload="metadata"
                      className="rounded-lg cursor-pointer object-cover transition-all object-center h-full w-full"
                    >
                      <source
                        src={`/videos/home/testimonials/testimonial-01.mp4`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
