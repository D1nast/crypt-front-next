"use client";

import React, { useEffect, useState } from "react";
// import axios from "axios";

interface Coin {
  rank: number;
  name: string;
  symbol: string;
  priceUsd: number;
  marketCapUsd: number;
}

function convertNum(num: number) {
  const convert = Math.round(num) / 100000;
  return convert.toLocaleString();
}

const sampleCoins: Coin[] = [
  { rank: 1, name: "Bitcoin", symbol: "BTC", priceUsd: 6800000, marketCapUsd: 130000000000 },
  { rank: 2, name: "Ethereum", symbol: "ETH", priceUsd: 400000, marketCapUsd: 50000000000 },
  { rank: 3, name: "Tether", symbol: "USDT", priceUsd: 150, marketCapUsd: 80000000000 },
  { rank: 4, name: "BNB", symbol: "BNB", priceUsd: 35000, marketCapUsd: 60000000000 },
  { rank: 5, name: "Solana", symbol: "SOL", priceUsd: 18000, marketCapUsd: 30000000000 },
];

export default function Ranking() {
  const [coins, setCoindata] = useState<Coin[]>(sampleCoins);

  // useEffect(() => {
  //   const fetchCoin = async () => {
  //     const url = `${process.env.NEXT_PUBLIC_API}`;
  //     const response = await axios.get(url);
  //     setCoindata(response.data.data);
  //   };
  //   fetchCoin();
  // }, []);

  return (
    <div className="pt-12 pb-12 text-center bg-white/75 dark:bg-gray-950/75 border-b border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full gap-y-2">
        {coins.map((coin) => (
          <div
            key={coin.rank}
            className="flex flex-row items-center justify-between w-full px-2 sm:px-8 py-4 border-b border-gray-200 dark:border-gray-800"
          >
            {/* 順位 */}
            <div className="text-gray-600 dark:text-gray-400 w-12 text-center">
              <span className="text-lg font-bold">{coin.rank}</span>
            </div>
            {/* 通称 */}
            <div className="flex-2 text-center text-gray-600 dark:text-gray-400">
              <span className="hidden sm:inline text-lg font-semibold">{coin.name} ({coin.symbol})</span>
              <span className="sm:hidden text-lg font-semibold">{coin.name}</span>
            </div>
            {/* 価格 */}
            <div className="flex-2 text-center text-gray-600 dark:text-gray-400">
              <span className="text-lg">${convertNum(Number(coin.priceUsd) * 100000)}</span>
            </div>
            {/* 時価総額 */}
            <div className="flex-2 text-right text-gray-600 dark:text-gray-400 hidden sm:block">
              <span className="text-lg">${convertNum(Number(coin.marketCapUsd))}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 