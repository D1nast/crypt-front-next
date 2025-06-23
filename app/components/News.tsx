"use client";

import React, { useEffect, useState } from "react";
// import axios from "axios";

interface Article {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
}

function CustomTabPanel({ children, value, index }: { children?: React.ReactNode; value: number; index: number }) {
  return (
    <div hidden={value !== index} className="w-full">
      {value === index && <div className="p-3">{children}</div>}
    </div>
  );
}

const sampleNews: Article[] = [
  {
    url: "https://example.com/news1",
    urlToImage: "https://placehold.co/400x200?text=News+1",
    title: "ビットコインが史上最高値を更新",
    description: "ビットコインの価格が過去最高値を記録しました。投資家の関心が高まっています。",
  },
  {
    url: "https://example.com/news2",
    urlToImage: "https://placehold.co/400x200?text=News+2",
    title: "イーサリアム2.0のアップグレード発表",
    description: "イーサリアム2.0のリリース日が発表され、注目を集めています。",
  },
  {
    url: "https://example.com/news3",
    urlToImage: "https://placehold.co/400x200?text=News+3",
    title: "主要取引所で新規通貨上場",
    description: "複数の主要取引所で新しい仮想通貨が上場されました。",
  },
  {
    url: "https://example.com/news4",
    urlToImage: "https://placehold.co/400x200?text=News+4",
    title: "DeFi市場が急成長",
    description: "分散型金融（DeFi）市場が急速に拡大しています。",
  },
  {
    url: "https://example.com/news5",
    urlToImage: "https://placehold.co/400x200?text=News+5",
    title: "NFTの取引量が過去最高に",
    description: "NFT（非代替性トークン）の取引量が過去最高を記録しました。",
  },
  {
    url: "https://example.com/news6",
    urlToImage: "https://placehold.co/400x200?text=News+6",
    title: "仮想通貨規制の動向",
    description: "各国で仮想通貨規制の議論が活発化しています。",
  },
  {
    url: "https://example.com/news7",
    urlToImage: "https://placehold.co/400x200?text=News+7",
    title: "新しいウォレットサービス登場",
    description: "利便性の高い新しい仮想通貨ウォレットサービスが登場しました。",
  },
  {
    url: "https://example.com/news8",
    urlToImage: "https://placehold.co/400x200?text=News+8",
    title: "マイニング報酬の半減期到来",
    description: "主要仮想通貨のマイニング報酬が半減期を迎えました。",
  },
  // 2ページ目以降のダミーデータも必要なら追加
];

export default function NewsAPI() {
  const [news, setNews] = useState<Article[]>(sampleNews);
  const [value, setValue] = useState(0);
  const tabLabels = ["1", "2", "3", "4"];

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const url = process.env.NEXT_PUBLIC_API + "/news";
  //     const request = await axios.get(url);
  //     const response = request.data.articles;
  //     setNews(response);
  //   };
  //   fetchNews();
  // }, []);

  return (
    <div className="bg-white/75 dark:bg-gray-950/75 max-w-full border-b border-gray-200 dark:border-gray-800">
      <div className="mt-10 pt-5 text-center">
        <h2 className="hidden sm:block text-3xl text-gray-600 dark:text-gray-400 mb-4">News</h2>
      </div>
      {/* Tabs */}
      <div className="flex justify-center mb-4">
        <div className="flex space-x-2 bg-white/75 dark:bg-gray-950/75 border border-gray-200 dark:border-gray-800 rounded-lg p-1">
          {tabLabels.map((label, idx) => (
            <button
              key={label}
              className={`px-4 py-2 rounded transition-colors duration-200 text-gray-600 dark:text-gray-400 text-sm font-semibold focus:outline-none ${
                value === idx
                  ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-50"
                  : "hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-900"
              }`}
              onClick={() => setValue(idx)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {/* News Cards */}
      <div className="flex flex-row flex-wrap pt-1 sm:pt-8 justify-center">
        {[
          [0, 0],
          [8, 1],
          [16, 2],
          [24, 3],
        ].map((Articles) => (
          news.slice(Articles[0], Articles[0] + 8).map((res, key) => (
            <React.Fragment key={Articles[1] + "-" + key}>
              <CustomTabPanel value={value} index={Articles[1]}>
                {/* PC用カード */}
                <div className="hidden sm:block">
                  <div className="max-w-xs max-h-[400px] mb-2 bg-white/75 dark:bg-gray-950/75 border border-gray-200 dark:border-gray-800 rounded shadow overflow-hidden">
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        className="h-40 w-full object-cover"
                        src={res.urlToImage}
                        alt={res.title}
                      />
                    </a>
                    <div className="p-2">
                      <div className="font-bold mb-2 text-base">{res.title}</div>
                      <div className="text-sm">{res.description}</div>
                    </div>
                  </div>
                </div>
                {/* スマホ用カード */}
                <div className="flex sm:hidden max-w-full max-h-[200px] bg-white/75 dark:bg-gray-950/75 border border-gray-200 dark:border-gray-800 rounded shadow overflow-hidden mb-2">
                  <div className="flex-1 p-2">
                    <div className="font-bold text-xs mb-1">{res.title}</div>
                    <div className="text-xs">{res.description}</div>
                  </div>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none w-36 h-full block"
                  >
                    <img
                      className="h-full w-full object-fill"
                      src={res.urlToImage}
                      alt={res.title}
                    />
                  </a>
                </div>
              </CustomTabPanel>
            </React.Fragment>
          ))
        ))}
      </div>
    </div>
  );
} 