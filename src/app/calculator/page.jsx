"use client";
import PieChart from "@/components/pieChart";
import { showError } from "@/utils/showToast";
import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [activeTab, setActiveTab] = useState("forex");
  const [error, setError] = useState("");
  const [profit, setProfit] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [investmentInputs, setInvestmentInputs] = useState({
    cryptocurrency: "Bitcoin (BTC)",
    monthly: 1000,
    roi: 5,
    duration: 12,
  });
  const [cryptoInvestmentInputs, setCryptoInvestmentInputs] = useState({
    monthly: 1000,
    roi: 5,
    duration: 12,
  });

  useEffect(() => {
    calculateInvestment(investmentInputs);
  }, []);

  const calculateInvestment = (investmentInputs) => {
    const { monthly, roi, duration } = investmentInputs;

    const finalAmount = monthly * Math.pow(1 + roi / 100, duration);
    setFinalValue(finalAmount.toFixed(2));

    const totalReturn = finalAmount - monthly;
    setProfit(totalReturn.toFixed(2));
  };

  const handleChangeInput = (e) => {
    setError("");
    const value = e.target.value;
    const name = e.target.name;
    if (value === 0 || value > 30) {
      let displayName;
      if (name === "roi") {
        displayName = "Expected return rate (p.a)";
      } else if (name === "duration") {
        displayName = "Time Period";
      }
      showError(`${displayName} Value must be between 1 and 30`);
      // setError("Value must be between 1 and 30");
    } else {
      setError("");
      setInvestmentInputs({ ...investmentInputs, [name]: value });
      calculateInvestment(investmentInputs);
    }
  };

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
      <div className="container mx-auto  p-4 lg:p-10">
        <div className="">
          <div className="">
            {/* Tab Buttons */}
            <div className="flex gap-3">
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
            <div className="p-4 mt-6">
              {activeTab === "forex" && (
                <div className="grid grid-cols-2">
                  {/* calculator */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex   items-center gap-2 justify-between">
                        <label htmlFor="monthly">Monthly Investment</label>
                        <div className="flex w-[120px] items-center  rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
                          <span className="p-2 pr-0">₹</span>

                          <input
                            type="number"
                            id="monthly"
                            name="monthly"
                            onChange={(e) =>
                              setInvestmentInputs({
                                ...investmentInputs,
                                monthly: e.target.value,
                              })
                            }
                            value={investmentInputs.monthly}
                            className="h-full p-2 outline-0"
                          ></input>
                        </div>
                      </div>
                      <input
                        className="w-full h-2 rounded-lg appearance-none accent-brand cursor-pointer"
                        style={{
                          background: `linear-gradient(90deg, #00D094 ${
                            investmentInputs.monthly / 1000
                          }%, #D9D9D9 ${investmentInputs.monthly / 1000}%)`,
                        }}
                        type="range"
                        step={1000}
                        min={1000}
                        max={100000}
                        value={investmentInputs.monthly}
                        onChange={(e) => {
                          setInvestmentInputs({
                            ...investmentInputs,
                            monthly: e.target.value,
                          });
                          calculateInvestment(investmentInputs);
                        }}
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 justify-between">
                        <label className="relative" htmlFor="roi">
                          Expected return rate (p.a)
                          <span className="absolute left-0 -bottom-4 text-nowrap text-sm text-red-600">
                            {error}
                          </span>
                        </label>
                        <div className="flex relative w-[120px] items-center rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
                          <input
                            type="number"
                            id="roi"
                            name="roi"
                            onChange={(e) => {
                              handleChangeInput(e);
                            }}
                            value={investmentInputs.roi}
                            className="h-full p-2 pe-0 outline-0 w-[45px]"
                          />
                          <span className="block ">%</span>
                        </div>
                      </div>
                      <input
                        className="w-full h-2 rounded-lg appearance-none accent-brand cursor-pointer"
                        style={{
                          background: `linear-gradient(90deg, #00D094 ${
                            (investmentInputs.roi / 30) * 100 - 1
                          }%, #D9D9D9 ${
                            (investmentInputs.roi / 30) * 100 - 1
                          }%)`,
                        }}
                        type="range"
                        name="roi"
                        step={0.5}
                        min={1}
                        max={30}
                        value={investmentInputs.roi}
                        onChange={(e) => handleChangeInput(e)}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 justify-between">
                        <label className="relative" htmlFor="duration">
                          Time Period
                          <span className="absolute left-0 -bottom-4 text-nowrap text-sm text-red-600">
                            {error}
                          </span>
                        </label>
                        <div className="flex relative w-[120px] items-center rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
                          <input
                            type="number"
                            id="duration"
                            name="duration"
                            onChange={(e) => {
                              handleChangeInput(e);
                            }}
                            value={investmentInputs.duration}
                            className="h-full p-2 pe-0 outline-0 w-[45px]"
                          />
                          <span className="block">Years</span>
                        </div>
                      </div>
                      <input
                        className="w-full h-2 rounded-lg appearance-none accent-brand cursor-pointer"
                        style={{
                          background: `linear-gradient(90deg, #00D094 ${
                            (investmentInputs.duration / 30) * 100 - 1
                          }%, #D9D9D9 ${
                            (investmentInputs.duration / 30) * 100 - 1
                          }%)`,
                        }}
                        type="range"
                        name="duration"
                        step={0.5}
                        min={1}
                        max={30}
                        value={investmentInputs.duration}
                        onChange={(e) => handleChangeInput(e)}
                      />
                    </div>
                  </div>
                  {/* results */}
                  <div>
                    <div className="flex gap-4 self-center items-center h-full"></div>
                  </div>
                </div>
              )}
              {activeTab === "crypto" && (
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* calculator */}
                  <div className="space-y-6">
                    <div className="mb-8">
                      <div className="flex items-center gap-2 justify-between">
                        <label htmlFor="cryptocurrency">Cryptocurrency</label>
                        <select
                          id="cryptocurrency"
                          name="cryptocurrency"
                          value={investmentInputs.cryptocurrency}
                          onChange={(e) =>
                            setInvestmentInputs({
                              ...investmentInputs,
                              cryptocurrency: e.target.value,
                            })
                          }
                          className="p-2 rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4"
                        >
                          <option value="BTC">Bitcoin (BTC)</option>
                          <option value="ETH">Ethereum (ETH)</option>
                          <option value="BNB">Binance Coin (BNB)</option>
                          <option value="ADA">Cardano (ADA)</option>
                          <option value="SOL">Solana (SOL)</option>
                          <option value="XRP">Ripple (XRP)</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex   items-center gap-2 justify-between">
                        <label htmlFor="monthly">Monthly Investment</label>
                        <div className="flex w-[120px] items-center  rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
                          <span className="p-2 pr-0">₹</span>

                          <input
                            type="number"
                            id="monthly"
                            name="monthly"
                            onChange={(e) =>
                              setInvestmentInputs({
                                ...investmentInputs,
                                monthly: e.target.value,
                              })
                            }
                            value={investmentInputs.monthly}
                            className="h-full p-2 outline-0"
                          ></input>
                        </div>
                      </div>
                      <input
                        className="w-full h-2 rounded-lg appearance-none accent-brand cursor-pointer"
                        style={{
                          background: `linear-gradient(90deg, #00D094 ${
                            investmentInputs.monthly / 1000
                          }%, #D9D9D9 ${investmentInputs.monthly / 1000}%)`,
                        }}
                        type="range"
                        step={1000}
                        min={1000}
                        max={100000}
                        value={investmentInputs.monthly}
                        onChange={(e) => {
                          setInvestmentInputs({
                            ...investmentInputs,
                            monthly: e.target.value,
                          });
                          calculateInvestment(investmentInputs);
                        }}
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 justify-between">
                        <label className="relative" htmlFor="roi">
                          Expected return rate (p.a)
                          <span className="absolute left-0 -bottom-4 text-nowrap text-sm text-red-600">
                            {error}
                          </span>
                        </label>
                        <div className="flex relative w-[120px] items-center rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
                          <input
                            type="number"
                            id="roi"
                            name="roi"
                            onChange={(e) => {
                              handleChangeInput(e);
                            }}
                            value={investmentInputs.roi}
                            className="h-full p-2 pe-0 outline-0 w-[45px]"
                          />
                          <span className="block ">%</span>
                        </div>
                      </div>
                      <input
                        className="w-full h-2 rounded-lg appearance-none accent-brand cursor-pointer"
                        style={{
                          background: `linear-gradient(90deg, #00D094 ${
                            (investmentInputs.roi / 30) * 100 - 1
                          }%, #D9D9D9 ${
                            (investmentInputs.roi / 30) * 100 - 1
                          }%)`,
                        }}
                        type="range"
                        name="roi"
                        step={0.5}
                        min={1}
                        max={30}
                        value={investmentInputs.roi}
                        onChange={(e) => handleChangeInput(e)}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 justify-between">
                        <label className="relative" htmlFor="duration">
                          Time Period
                          <span className="absolute left-0 -bottom-4 text-nowrap text-sm text-red-600">
                            {error}
                          </span>
                        </label>
                        <div className="flex relative w-[120px] items-center rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
                          <input
                            type="number"
                            id="duration"
                            name="duration"
                            onChange={(e) => {
                              handleChangeInput(e);
                            }}
                            value={investmentInputs.duration}
                            className="h-full p-2 pe-0 outline-0 w-[45px]"
                          />
                          <span className="block">Years</span>
                        </div>
                      </div>
                      <input
                        className="w-full h-2 rounded-lg appearance-none accent-brand cursor-pointer"
                        style={{
                          background: `linear-gradient(90deg, #00D094 ${
                            (investmentInputs.duration / 30) * 100 - 1
                          }%, #D9D9D9 ${
                            (investmentInputs.duration / 30) * 100 - 1
                          }%)`,
                        }}
                        type="range"
                        name="duration"
                        step={0.5}
                        min={1}
                        max={30}
                        value={investmentInputs.duration}
                        onChange={(e) => handleChangeInput(e)}
                      />
                    </div>
                  </div>
                  {/* results */}
                  <div className="custom-row mb-12  lg:mb-0">
                    <div className="flex flex-col  lg:flex-row gap-4 self-center items-center h-full">
                      <div className="size-36 mx-auto">
                        <PieChart
                          investedSlice={investmentInputs.monthly}
                          returnSlice={finalValue}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center w-[200px] md:w-[240px] justify-between ">
                            <span>Total Investment Amount</span>
                            <span>:</span>
                          </div>
                          <div className="min-w-[90px]">
                            <b>
                              ₹ {Number(investmentInputs.monthly).toFixed(2)}
                            </b>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center w-[200px] md:w-[240px] justify-between ">
                            <span>Est. Returns (Profit /Loss)</span>
                            <span>:</span>
                          </div>
                          <div className="min-w-[90px]">
                            <b>₹ {profit}</b>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center w-[200px] md:w-[240px] justify-between ">
                            <span>Total Returns</span>
                            <span>:</span>
                          </div>
                          <div className="min-w-[90px] text-brand">
                            <b>₹ {finalValue}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
