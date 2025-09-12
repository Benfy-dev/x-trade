"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { cards } from "@/utils/serviceData";
import { slideUpByClass } from "@/utils/slideUpAnimation";

export default function Services() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;
    const arrow = arrowRef.current;

    slideUpByClass("slide-up-init");

    const hoverTimeline = gsap.timeline({ paused: true });

    hoverTimeline
      .to(circle, { scale: 1.1, duration: 0.5, ease: "elastic.out(1, 0.5)" }, 0)
      .to(arrow, { rotation: 120, duration: 0.5, ease: "power1.out" }, 0);

    container.addEventListener("mouseenter", () => hoverTimeline.play());
    container.addEventListener("mouseleave", () => hoverTimeline.reverse());

    return () => {
      container.removeEventListener("mouseenter", () => hoverTimeline.play());
      container.removeEventListener("mouseleave", () =>
        hoverTimeline.reverse()
      );
    };
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-4 lg:p-10 min-h-screen start">
      {/* LEFT SIDE (Scrolling Cards, Centered) */}
      <div className="container mx-auto">
        <div className="cards relative flex lg:flex-col gap-x-6 overflow-auto lg:overflow-[initial] items-center lg:justify-center">
          {cards.map((c, i) => (
            <div
              key={c.id}
              className=" w-full mt-24 lg:mt-0 lg:h-screen flex items-center text-center"
            >
              <div className="border min-h-[280px] lg:min-h-[240px] flex flex-col justify-end border-gray-200 rounded-xl p-6 lg:p-12 relative text-start max-w-full w-[460px]">
                <div className="absolute right-2 -top-18 lg:-right-18 lg:-top-28 size-36 lg:size-44 object-contain ">
                  <Image
                    src={c.url}
                    alt={c.title}
                    width={340}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-3xl font-inria font-bold mb-4">
                  {c.title}
                </h3>
                <p className="">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (Sticky, Centered) */}
      <div ref={containerRef} className="overflow-x-clip slide-up-init">
        <div className="lg:sticky top-0 flex  flex-col lg:items-center text-start justify-center lg:h-screen">
          <div className="relative w-fit md:w-[320px] text-center">
            {/* Decorative Circle */}
            <div
              ref={circleRef}
              className="size-24 md:size-32 xl:size-42 absolute -top-12 right-0 md:-top-12 md:-right-20 lg:-right-12 lg:-top-20 xl:-top-24 -z-[1] xl:-right-26 bg-brand rounded-full"
            ></div>

            {/* Static Title */}
            <h2 className="text-3xl font-bold relative font-inria mb-4 text-start">
              Services We Offer
              <span>
                <Image
                  ref={arrowRef}
                  className="size-12 absolute right-5 md:-right-10 lg:-right-2 xl:-right-11 -top-6 md:-top-1 lg:-top-9 xl:-top-9 lg:rotate-180"
                  src="/images/home/icons/arrow-right.svg"
                  height={20}
                  width={20}
                  alt="services"
                  aria-hidden="true"
                />
              </span>
            </h2>

            {/* Static Description */}
            <p className="text-start">
              Explore our range of premium services designed to give you the
              best trading experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
