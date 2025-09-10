"use client";
import { slideUpByClass } from "@/utils/slideUpAnimation";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    slideUpByClass("slide-up-init");
  }, []);
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'url("/images/home/homeBG.svg")',
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto h-full">
        <div className="grid h-full p-4 lg:p-10 grid-cols-1 md:grid-cols-2">
          <div className="self-center">
            <h1 className="font-caveat text-5xl w-fit font-bold relative slide-up-init">
              Thank you 🙂
              <div className="absolute inset-x-0 -bottom-4">
                <Image
                  width={100}
                  height={100}
                  src="/images/thank-you.svg"
                  alt="thank you"
                  className="w-[80%] h-auto "
                  aria-hidden="true"
                />
              </div>
            </h1>
            {/* padding-block-start */}
            <p className="text-xl mt-6 slide-up-init">
              for registering with Xtrade Markets.
            </p>

            <div className="mt-8 lg:mt-14 space-y-6 slide-up-init">
              <p className="text-xl">
                Our executives will get in touch with you shortly for a free
                demo. Meanwhile, if you need any additional information please
                check our website.
              </p>

              <Link className="block py-2 px-4 border w-fit" href={"/"}>
                Visit Xtrade Markets.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
