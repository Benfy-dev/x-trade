"use client";
import Crypto from "@/components/calculator/crypto/page";
import Forex from "@/components/calculator/forex/page";
import PieChart from "@/components/pieChart";
import { showError } from "@/utils/showToast";
import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [activeTab, setActiveTab] = useState("forex");

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'url("/images/home/homeBG.svg")',
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "repeat",
        backgroundColor: "rgba(255,255,255,.5)",
        backgroundBlendMode: "color",
      }}
    >
      <div className="container mx-auto  p-4 lg:p-10">
        <div className="">
          <div className="">
            {/* Tab Buttons */}
            <div className="flex mx-10 gap-3">
              <button
                className={`py-2 cursor-pointer rounded-4xl px-4 outline-offset-4 focus:outline-brand ${
                  activeTab === "forex"
                    ? "text-white bg-brand"
                    : "hover:text-brand"
                }`}
                onClick={() => setActiveTab("forex")}
              >
                Forex
              </button>
              <button
                className={`py-2 cursor-pointer rounded-4xl px-4 outline-offset-4 focus:outline-brand ${
                  activeTab === "crypto"
                    ? "text-white bg-brand"
                    : "hover:text-brand"
                }`}
                onClick={() => setActiveTab("crypto")}
              >
                crypto
              </button>
            </div>

            {/* Tab Content */}
            <div className="md:p-4 md:px-10 mt-6">
              {activeTab === "forex" && <Forex />}
              {activeTab === "crypto" && <Crypto />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
