"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div className="mt-16 bg-[#00140f] text-white relative overflow-clip">
      <div
        aria-hidden="true"
        className="hidden md:block pointer-events-none opacity-10 absolute -left-[200px] md:-left-16 top-20 md:top-20 bottom-20 md:bottom-0 w-[320px] h-[100%] md:w-[380px] md:h-[90%] rotate-6 md:rotate-12 "
        style={{
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          background:
            "linear-gradient(150.39deg, rgba(237, 242, 248, 0.22) 15.02%, #EDF2F8 99.59%)",
          outline: "1px solid white",
          outlineOffset: "40px",
        }}
      >
        s
      </div>
      <div className="container mx-auto">
        <div className="p-4 lg:px-10 lg:py-20">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-6">
            <div className="lg:shrink-0 md:w-[40%]">
              <Image
                src="/images/xtrade-logo-dark.png"
                alt="Xtrade Logo"
                width={182}
                height={65}
              />
              <p className="mt-4 leading-6 text-white/70">
                Your premier trading partner. Experience
                <br />
                cutting-edge technology, expert guidance, and <br />
                unparalleled support. Start your journey to
                <br />
                success now!
              </p>
            </div>
            <div className="lg:shrink-0 md:w-[15%]">
              <h3 className="text-lg font-bold">Quick links</h3>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Promotions</a>
                </li>
                <li>
                  <a href="">Be a Partner</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
              </ul>
            </div>
            <div className="lg:shrink-0 md:w-[15%]">
              <h3 className="text-lg font-bold">Support</h3>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>
                  <a href="">Terms & Conditions </a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Get in Touch</a>
                </li>
              </ul>
            </div>
            <div className="lg:shrink-0 md:w-[25%]">
              <h3 className="text-lg font-bold">Our Office</h3>
              <address className="mt-4 not-italic text-white/70 leading-6">
                22 Gilbert Street, London, England, W1K 5EJ
              </address>
              <div className="flex gap-2 mt-4">
                <a
                  target="_blank"
                  href="https://www.instagram.com/xtrade.markets/?utm_source=qr#"
                  className="bg-brand p-2 rounded block"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="!text-white size-5 pointer-events-none rounded-sm"
                    style={{ fill: "currentColor" }}
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Xtrademarkets/61575118681037/"
                  className="bg-brand p-2 rounded block"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="!text-white size-5 pointer-events-none rounded-sm"
                    style={{ fill: "currentColor" }}
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href=""
                  className="bg-brand p-2 rounded block"
                >
                  <span className="sr-only">X</span>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="X--Streamline-Simple-Icons"
                    className="!text-white size-5 pointer-events-none rounded-sm"
                  >
                    <path
                      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                      fill="currentColor"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-4 border-b border-white pb-8">
            <p>
              Xtrademarkets is a brand operated by XTRADEMARKETS SOLUTIONS LTD,
              a registered entity governed by applicable financial regulations.
            </p>

            <p>
              <b>Risk Disclosure:</b> Trading foreign exchange and CFDs involves
              a high degree of risk and may not be appropriate for all
              investors. Before trading, please ensure you understand the nature
              of these products and the risks involved. Leveraged trading can
              lead to losses that exceed your initial deposit. Independent
              financial advice is recommended if you are uncertain about your
              level of understanding or risk tolerance.
            </p>

            <p>
              For support or inquiries, reach out to us at{" "}
              <a className="font-bold" href="mailto:support@xtrademarkets.com">
                support@xtrademarkets.com
              </a>
            </p>
          </div>
          <div className="mt-8 text-center ">
            <p>
              Copyright {currentYear} &copy; XTRADEMARKETS SOLUTIONS LTD (
              <b>16364140</b>)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
