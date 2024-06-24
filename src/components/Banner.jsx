import { useEffect, useState } from "react";
import axios from "axios"; 
import banner from "../assets/banner.png";

export const Banner = () => {
    const [quote, setQuote] = useState("Loading...");
    const [author, setAuthor] = useState("Loading...");
    const api_url = "https://api.quotable.io/random";

    const getQuote = async (url) => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            setQuote("An error occurred while fetching the quote.");
            setAuthor("");
            console.error(error);
        }
    };

    useEffect(() => {
        getQuote(api_url);
    }, []);

    return (
        // <div className="relative bg-cover bg-center h-[500px] p-44" style={{ backgroundImage: `url(${banner})` }}>
        //     <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        //     <div className="relative container mx-auto px-4 h-full flex items-center">
        //         <div className="text-white max-w-lg">
        //             <h1 className="text-5xl font-bold mb-4">Meet the Best Hospital</h1>
        //             <p className="text-lg mb-8">{quote}</p>
        //             <div className="flex space-x-4">
        //                 <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" 
        //                 onClick={() => getQuote(api_url)}>
        //                     Get Quote Now
        //                 </button>
        //                 <span className="bg-transparent hover:bg-white hover:text-teal-600 text-white font-bold py-2 px-4 border border-white rounded-full">
        //                     {author}
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
         <div 
         className="h-screen bg-cover bg-center flex items-center justify-center" 
         style={{ backgroundImage: `url(${banner})` }}
       >
         <div className=" text-white p-4 bg-opacity-50 rounded-lg max-w-lg mx-auto grid gap-4 ">
           <h1 className="text-4xl md:text-6xl font-bold col-span-full">Meet the Best Hospital</h1>
           <p className="mt-4 text-lg md:text-2xl col-span-full">{quote}</p>
           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 col-span-full">
             <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"
             onClick={() => getQuote(api_url)}>
               Get Quote Now
             </button>
             <button className="bg-transparent hover:bg-white hover:text-teal-600 text-white font-bold py-2 px-4 border border-white rounded-full">
             {author}
             </button>
           </div>
         </div>
       </div>
    );
};