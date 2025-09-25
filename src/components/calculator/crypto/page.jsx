import DropDown from "@/components/dropDown";
import PieChart from "@/components/pieChart";
import { showError } from "@/utils/showToast";
import React, { useEffect, useState } from "react";

const Crypto = () => {
  const [error, setError] = useState("");
  const [profit, setProfit] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [investmentInputs, setInvestmentInputs] = useState({
    cryptocurrency: "Bitcoin (BTC)",
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
    <div className="grid grid-cols-1 lg:grid-cols-5 xl:gap-6 overflow-clip">
      {/* calculator */}
      <div className="space-y-6 col-span-2">
        <div className="mb-8">
          <div className="flex items-center gap-2 justify-between">
            <label htmlFor="cryptocurrency">Cryptocurrency</label>
            <span className="relative">
              <DropDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />

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
                className=" appearance-none p-2 mx-1 w-[90%] sm:w-[initial] rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="BNB">Binance Coin (BNB)</option>
                <option value="ADA">Cardano (ADA)</option>
                <option value="SOL">Solana (SOL)</option>
                <option value="XRP">Ripple (XRP)</option>
              </select>
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex   items-center gap-2 justify-between">
            <label className="" htmlFor=" monthly">
              Monthly Investment
            </label>
            <div className="flex mx-1 w-28 lg:w-[120px] items-center  rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
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
            className="w-full h-1.5 rounded-lg appearance-none accent-brand cursor-pointer"
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
            <div className="flex mx-1 relative w-28 lg:w-[120px] items-center rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
              <input
                type="number"
                id="roi"
                name="roi"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
                value={investmentInputs.roi}
                className="h-full p-2 pe-0 outline-0"
              />
              <span className="block absolute right-2">%</span>
            </div>
          </div>
          <input
            className="w-full h-1.5 rounded-lg appearance-none accent-brand cursor-pointer"
            style={{
              background: `linear-gradient(90deg, #00D094 ${
                (investmentInputs.roi / 30) * 100 - 1
              }%, #D9D9D9 ${(investmentInputs.roi / 30) * 100 - 1}%)`,
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
            <div className="flex mx-1 relative w-28 lg:w-[120px] items-center rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
              <input
                type="number"
                id="duration"
                name="duration"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
                value={investmentInputs.duration}
                className="h-full p-2 pe-0 outline-0 "
              />
              <span className="block absolute right-2">Years</span>
            </div>
          </div>
          <input
            className="w-full h-1.5 rounded-lg appearance-none accent-brand cursor-pointer"
            style={{
              background: `linear-gradient(90deg, #00D094 ${
                (investmentInputs.duration / 30) * 100 - 1
              }%, #D9D9D9 ${(investmentInputs.duration / 30) * 100 - 1}%)`,
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
      <div className="custom-row mb-12 lg:col-span-3 lg:mb-0">
        <div className="flex flex-col lg:flex-row gap-4 self-center items-center h-full">
          <div className="size-36 mx-auto">
            <PieChart
              investedSlice={investmentInputs.monthly}
              returnSlice={finalValue}
            />
          </div>
          <div>
            <div className="flex items-center justify-start md:justify-start gap-2 lg:gap-6">
              <div className="flex items-center text-left md:w-[240px] w-[182px] justify-between ">
                <span>Total Investment Amount</span>
                <span>:</span>
              </div>
              <div className=" min-w-[98px] shrink-0">
                <b>₹ {Number(investmentInputs.monthly).toFixed(2)}</b>
              </div>
            </div>
            <div className="flex items-center justify-start md:justify-start gap-2 lg:gap-6">
              <div className="flex items-center text-left md:w-[240px] w-[182px] justify-between ">
                <span>Est. Returns (Profit /Loss)</span>
                <span>:</span>
              </div>
              <div className="min-w-[98px] shrink-0">
                <b>₹ {profit}</b>
              </div>
            </div>
            <div className="flex items-center justify-start md:justify-start gap-2 lg:gap-6">
              <div className="flex items-center text-left md:w-[240px] w-[182px] justify-between ">
                <span>Total Returns</span>
                <span>:</span>
              </div>
              <div className="min-w-[98px] text-brand">
                <b>₹ {finalValue}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
