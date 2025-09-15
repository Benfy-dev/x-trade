"use client";
import { slideUpByClass } from "@/utils/slideUpAnimation";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Banner = () => {
  const router = useRouter();
  useEffect(() => {
    slideUpByClass("slide-up-init");
  }, []);

  return (
    <>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: 'url("/images/home/homeBG.svg")',
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto min-h-full">
          <div className="grid grid-cols-1 slide-up-init lg:grid-cols-2 xl:grid-cols-3 h-full p-4 lg:p-10">
            <div className="flex xl:col-span-2 items-center justify-center lg:justify-normal">
              <div>
                <div className="font-inria xl:w-[544px] max-w-full mb-4 relative">
                  <Image
                    className="absolute hidden lg:block -right-44 top-8 -z-[1] pointer-events-none"
                    src={"/images/home/icons/bitcoin.svg"}
                    alt="coin"
                    aria-hidden="false"
                    height={100}
                    width={100}
                  />
                  <p className="text-3xl text-brand font-bold">
                    India’s Trusted
                  </p>
                  <h1 className="text-5xl xl:text-7xl font-bold">
                    <span className="relative">
                      Bitcoin
                      <span className="size-4 bg-brand absolute bottom-3 -z-[1] rounded-full -right-1"></span>
                    </span>{" "}
                    &{" "}
                    <span className="relative">
                      Crypto
                      <span className="size-4 bg-brand absolute bottom-4 -z-[1] rounded-full -right-0"></span>
                    </span>
                  </h1>
                </div>
                <div className="xl:w-[544px] font-light max-w-full text-lg xl:text-[26px] space-y-3">
                  <p className="tracking-[3px] md:tracking-[6.5px] ">
                    Trading & Investment Platform
                  </p>
                  <hr />
                  <p>Achieve success with smart, reliable strategies.</p>
                </div>
                <div className="mt-8 md:mt-14 text-2xl font-kiwi w-fit ml-auto md:ml-0 font-medium md:text-4xl">
                  <p className="bg-brand w-fit -rotate-6 text-white p-2 md:p-4 rounded-[8px]">
                    10 Years of
                  </p>
                  <p className="relative ms-4 -rotate-3 w-fit rounded-[8px]">
                    Trade Markets
                    <Image
                      className="absolute -top-6 -right-4"
                      src={"/images/home/icons/star-xtrade.svg"}
                      alt="start"
                      aria-hidden="true"
                      width={30}
                      height={30}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-normal">
              <div className="flex flex-col-reverse lg:flex-col gap-4 lg:gap-8">
                <h2 className="text-2xl text-center">
                  Invest in Bitcoin & crypto <br />
                  <span className="font-bold">smartly, maximize returns.</span>
                </h2>
                <div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      router.push("/thank-you");
                    }}
                    action=""
                    className="p-4 md:p-8 bg-white md:w-[420px] rounded-xl max-w-full"
                    style={{ boxShadow: " 0px 9px 15.8px 0px #00000012" }}
                  >
                    <input
                      className="p-2 rounded-md w-full border border-gray-200 placeholder:text-gray-400/90"
                      type="text"
                      placeholder="Your Name*"
                      autoComplete="off"
                      name="name"
                      id="name"
                      required
                      pattern="[A-Za-z\s]{1,50}"
                      maxLength={50}
                    />
                    <input
                      className="p-2 my-6 rounded-md w-full border border-gray-200 placeholder:text-gray-400/90"
                      type="tel"
                      placeholder="Mobile Number*"
                      autoComplete="on"
                      name="phone"
                      id="phone"
                      required
                      maxLength={10}
                    />
                    <input
                      className="p-2 rounded-md w-full border border-gray-200 placeholder:text-gray-400/90"
                      type="email"
                      placeholder="E-mail ID*"
                      autoComplete="off"
                      name="mail"
                      id="mail"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <small className="text-gray-400">
                      Your personal information is secure with us.
                    </small>

                    <p className="text-xl md:text-2xl mt-6">
                      Turn Numbers into Growth with <br className="" />
                      <span className="font-bold">Our Profit Calculator.</span>
                    </p>

                    <button
                      type="submit"
                      className="cursor-pointer py-2 px-4 mt-4 bg-brand text-white rounded md:text-xl"
                    >
                      View Profit Calculator
                    </button>
                  </form>
                  <small className="text-[10px] lg:ms-2 text-gray-700">
                    By clicking on view plans, you agreed to our Privacy policy,
                    Terms of Use & "Disclaimer
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full slide-up-init">
        <div className="absolute top-0 w-1/2 pointer-events-none right-0 lg:hidden h-full bg-[linear-gradient(to_right,transparent_80%,white_100%)] z-[2]"></div>
        <div className="text-center grid grid-flow-col auto-cols-max overflow-x-auto gap-8 lg: lg:gap-2 md:grid-cols-3 p-10 relative">
          <div>
            <span className="text-brand bg-brand/30 py-0.5 px-1 rounded-xs">
              1200 K+
            </span>{" "}
            Customers served
          </div>
          <div>
            <span className="text-brand bg-brand/30 py-0.5 px-1 rounded-xs">
              250+
            </span>{" "}
            Team Members
          </div>
          <div>
            <span className="text-brand bg-brand/30 py-0.5 px-1 rounded-xs">
              10 Years
            </span>{" "}
            of Successful Market Presence
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
