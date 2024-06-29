import { useEffect, useState } from "react";
import axios from "axios";
import banner from "../assets/banner.png";

export const Banner = () => {
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });
  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };
  loadQuotes();

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className=" text-white p-4 bg-opacity-50 rounded-lg max-w-lg mx-auto grid gap-4 ">
        <h1 className="text-4xl md:text-6xl font-bold col-span-full">
          Meet the Best Hospital
        </h1>
        <p className="mt-4 text-lg md:text-2xl col-span-full">{quote.text}</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 col-span-full">
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => random()}
          >
            Get Quote Now
          </button>
          <button className="bg-transparent hover:bg-white hover:text-teal-600 text-white font-bold py-2 px-4 border border-white rounded-full">
            {quote.author.split(",")[0]}
          </button>
        </div>
      </div>
    </div>
  );
};
