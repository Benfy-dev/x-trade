"use client";
import DropDown from "@/components/dropDown";
import PieChart from "@/components/pieChart";
import { showError } from "@/utils/showToast";
import React, { useEffect, useState } from "react";

const Forex = () => {
  const [form, setForm] = useState({
    accountCurrency: "USD",
    pair: "EUR/USD",
    investment: 1000,
    side: "buy",
    entry: 1.0825,
    exit: 1.09,
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const parsePair = (pair) => {
    const parts = pair.trim().toUpperCase().split("/");
    if (parts.length !== 2) return null;
    return { base: parts[0], quote: parts[1] };
  };

  const calculatePnL = () => {
    setError("");
    const account = form.accountCurrency.toUpperCase();
    const pair = parsePair(form.pair);
    const investment = parseFloat(form.investment);
    const entry = parseFloat(form.entry);
    const exitP = parseFloat(form.exit);

    if (!pair) {
      setError("Please select a valid currency pair.");
      return;
    }
    if (!entry || !exitP || investment <= 0) {
      setError("Please enter valid numbers for entry, exit, and investment.");
      return;
    }

    const base = pair.base;
    const quote = pair.quote;

    let baseUnits;
    if (account === quote) {
      baseUnits = investment / entry;
    } else if (account === base) {
      baseUnits = investment;
    } else {
      setError(
        "Account currency must be either the base or quote of the pair.",
      );
      return;
    }

    let pnlInQuote = (exitP - entry) * baseUnits;
    if (form.side === "sell") pnlInQuote = -pnlInQuote;

    let pnlInAccount;
    if (account === quote) {
      pnlInAccount = pnlInQuote;
    } else if (account === base) {
      pnlInAccount = pnlInQuote / exitP;
    }

    const r = (x) => Math.round((x + Number.EPSILON) * 100) / 100;
    const sign = pnlInAccount >= 0 ? "Profit" : "Loss";
    const totalProfit = r(parseFloat(form.investment) + pnlInAccount);

    console.log("clg");

    setResult({
      totalProfit: totalProfit,
      money: account,
      actualMoney: r(Math.abs(pnlInAccount)),
      summary: `${sign}: ${r(Math.abs(pnlInAccount))} ${account}`,
      sign: sign,
      details: `Base=${base}, Quote=${quote} | Base units ≈ ${r(
        baseUnits,
      )} ${base} | P/L in quote ≈ ${r(pnlInQuote)} ${quote}`,
    });
  };

  useEffect(() => {
    calculatePnL();
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 overflow-clip">
      {/* calculator */}
      <div className="space-y-6">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="mx-1">
            <label className="mb-3 block" htmlFor="accountCurrency">
              Account currency
            </label>
            <span className="relative">
              <DropDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
              <select
                id="accountCurrency"
                name="accountCurrency"
                value={form.accountCurrency}
                onChange={handleChange}
                className="appearance-none p-2 w-full lg:w-44 rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="AUD">AUD</option>
              </select>
            </span>
          </div>
          <div className="mx-1">
            <label className="mb-3 block" htmlFor="pair">
              Currency pair
            </label>
            <span className="relative">
              <DropDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
              <select
                id="pair"
                name="pair"
                value={form.pair}
                onChange={handleChange}
                className="appearance-none p-2 w-full lg:w-44 rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4"
              >
                <option value="EUR/USD">EUR/USD</option>
                <option value="USD/JPY">USD/JPY</option>
                <option value="GBP/USD">GBP/USD</option>
                <option value="USD/CHF">USD/CHF</option>
                <option value="AUD/USD">AUD/USD</option>
                <option value="USD/CAD">USD/CAD</option>
                <option value="NZD/USD">NZD/USD</option>
                <option value="EUR/GBP">EUR/GBP</option>
                <option value="EUR/JPY">EUR/JPY</option>
                <option value="GBP/JPY">GBP/JPY</option>
                <option value="AUD/JPY">AUD/JPY</option>
                <option value="CHF/JPY">CHF/JPY</option>
                <option value="EUR/CHF">EUR/CHF</option>
                <option value="EUR/AUD">EUR/AUD</option>
                <option value="GBP/CHF">GBP/CHF</option>
              </select>
            </span>
          </div>
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="flex mx-1 flex-col justify-between">
            <label className="mb-3 block" htmlFor="investment">
              Investment amount{" "}
              <span className="hidden lg:inline">
                <br />
              </span>{" "}
              (in account currency)
            </label>
            <div className="flex w-full lg:w-44 items-center  rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
              <input
                type="number"
                id="investment"
                name="investment"
                onChange={handleChange}
                value={form.investment}
                className="h-full p-2 w-full outline-0"
              ></input>
            </div>
          </div>
          <div className="mx-1 flex flex-col justify-between">
            <label className="mb-3 block" htmlFor="side">
              Position
            </label>
            <span className="w-fit relative">
              <DropDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
              <select
                id="side"
                name="side"
                value={form.side}
                onChange={handleChange}
                className="appearance-none p-2 w-full lg:w-44 rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4"
              >
                <option value="buy">Buy (long)</option>
                <option value="sell">Sell (short)</option>
              </select>
            </span>
          </div>
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="mx-1">
            <label className="mb-2 inline-block" htmlFor=" entry">
              Entry price
            </label>
            <div className="flex w-full lg:w-44 items-center  rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
              <input
                type="number"
                id="entry"
                name="entry"
                onChange={handleChange}
                value={form.entry}
                className="h-full p-2 w-full outline-0"
              ></input>
            </div>
          </div>
          <div className="mx-1">
            <label className="mb-2 inline-block" htmlFor="exit">
              Exit Price
            </label>
            <div className="flex w-full lg:w-44 items-center  rounded bg-brand/20 border border-brand focus:outline-brand outline-offset-4">
              <input
                type="number"
                id="exit"
                name="exit"
                onChange={handleChange}
                value={form.exit}
                className="h-full p-2 w-full outline-0"
              ></input>
            </div>
          </div>
        </div>
      </div>
      {/* results */}
      {/* <div className="custom-row mb-12 lg:mb-0">
        <div className="flex flex-col lg:flex-row gap-4 self-center items-center h-full">
          <div className="p-4 border rounded bg-white ">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {result ? (
              <>
                <h3 className="text-lg font-bold">{result.summary}</h3>
                <p>{result.details}</p>
                <b>{result.totalPrice}</b>
              </>
            ) : (
              <p>Enter details to calculate PnL.</p>
            )}
          </div>
        </div>
      </div> */}

      <div className="custom-row mb-12  lg:mb-0">
        <div className="flex flex-col lg:flex-row gap-4 self-center justify-center items-center h-full">
          <div className="p-6 border border-brand rounded">
            {result && (
              <>
                <div className="flex items-center justify-start md:justify-start gap-2 lg:gap-6">
                  <div className="flex items-center text-left md:w-[240px] w-[182px] justify-between ">
                    <span>Total Investment Amount</span>
                    <span>:</span>
                  </div>
                  <div className=" min-w-[98px] shrink-0">
                    <b>
                      {result.money} {form.investment}
                    </b>
                  </div>
                </div>
                <div className="flex items-center justify-start md:justify-start gap-2 lg:gap-6">
                  <div className="flex items-center text-left md:w-[240px] w-[182px] justify-between ">
                    <span>Est. Returns ({result.sign})</span>
                    <span>:</span>
                  </div>
                  <div className="min-w-[98px] shrink-0">
                    <b>
                      {result.money} {result.actualMoney}
                    </b>
                  </div>
                </div>
                <div className="flex items-center justify-start md:justify-start gap-2 lg:gap-6">
                  <div className="flex items-center text-left md:w-[240px] w-[182px] justify-between ">
                    <span>Total Returns</span>
                    <span>:</span>
                  </div>
                  <div className="min-w-[98px] text-brand">
                    <b>
                      {result.money}{" "}
                      {result.totalProfit ? result.totalProfit : "No"}
                    </b>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forex;
