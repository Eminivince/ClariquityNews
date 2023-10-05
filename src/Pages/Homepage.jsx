import React from "react";
import Navbar from "../Components/Navbar";
import NewsData from "../assets/images/NewsData";
import AdBoard from "../Components/AdBoard";
import { useState } from "react";
import Footer from "../Components/Footer";

const Homepage = () => {
  const [color, setColor] = useState("bg-black");

  const changeColorToRed = (e) => {
    //let target = e.target

    setColor("bg-red-500");
  };
  const changeColorToBlack = (e) => {
    //let target = e.target

    setColor("bg-black");
  };
  return (
    <div>
      <Navbar />
      <div className="mt-20">
      <AdBoard />
      <div className="md:flex grid grid-cols-2 gap-2 md:space-x-5 mt-8 md:px-20">
        {NewsData.map((newsItem) => {
          return (
            <div className="border-1 border-black">
              <div className="relative h-[70vh]">
                <img
                  src={newsItem.image}
                  alt="newsImage"
                  className="object-cover h-[100%] w-[100%] opacity-80 hover:cursor-pointer hover:scale-105 hover:opacity-100 duration-500"
                />
                <div className="absolute bottom-12 left-8 space-y-2">
                  <h1 className="bg-red-600 w-fit p-1 text-white font-semibold px-4">
                    {newsItem.Category}
                  </h1>
                  <h1 className="text-4xl font-bold text-white">
                    {newsItem.Title}
                  </h1>
                  <div className="flex space-x-3 text-white font-semibold">
                    <div>{newsItem.Author}</div>
                    <span>-</span>
                    <div>{newsItem.Date}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <section className="md:px-20 px-5 pt-10">
        <div>
          <div className="mb-6">
            <div className="flex justify-between mb-1 font-bold">
              <p>Category:</p>
              <p>POLITICS</p>
            </div>
            <div className="h-[1px] w-full bg-gray-500"></div>
          </div>

          <div className="flex md:flex-row flex-col md:space-x-8">
            {NewsData.map((newsItem) => {
              return (
                <div className="border-1 border-black  mb-10 ">
                  <div>
                    <div className="md:h-[50vh] h-[30vh] relative">
                      <img
                        src={newsItem.image}
                        alt="newsImage"
                        className="object-cover h-[100%] w-[100%]  hover:cursor-pointer hover:opacity-80 duration-300"
                      />
                      <h1 className="bg-black w-fit p-1 text-white font-semibold px-4 absolute bottom-0">
                        {newsItem.Category}
                      </h1>
                    </div>

                    <div className="mt-3 space-y-1">
                      <h1 className="text-2xl font-bold text-black">
                        {newsItem.Title}
                      </h1>
                      <div className="flex space-x-3 text-black font-semibold">
                        <div className="text-red-500"> {newsItem.Author}</div>
                        <span>-</span>
                        <div>{newsItem.Date}</div>
                      </div>
                      <h1>{`${newsItem.Info.substring(0, 200).trim()}...`}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="my-8">
        <div className="md:px-20">
          <AdBoard />
        </div>
        
        <div className="md:grid md:grid-cols-6 mt-6 md:px-20 px-5 md:gap-12">
          <div className="flex flex-col col-span-4">
            <div className="mb-3">
                <h1 className="bg-[#FFD700] p-3 font-bold">TRAVEL</h1>

            </div>
            <div className="flex flex-col md:flex-row space-y-10 md:space-x-8 col-span-4">
            {NewsData.map((newsItem) => {
              return (
                <div className="border-1 border-black">
                  <div>
                    <div
                      className="h-[50vh] relative"
                      onMouseEnter={changeColorToRed}
                      onMouseOut={changeColorToBlack}
                      
                    >
                      <img
                        src={newsItem.image}
                        alt="newsImage"
                        className="object-cover h-[100%] w-[100%] hover:cursor-pointer hover:opacity-80 duration-300"
                      />
                      <h1
                        className={`${color} w-fit p-1 text-white font-semibold px-4 absolute bottom-0`}
                      >
                        {newsItem.Category}
                      </h1>
                    </div>

                    <div className="mt-3 space-y-1">
                      <h1 className="text-2xl font-bold text-black">
                        {newsItem.Title}
                      </h1>
                      <div className="flex space-x-3 text-black font-semibold">
                        <div>{newsItem.Author}</div>
                        <span>-</span>
                        <div>{newsItem.Date}</div>
                      </div>
                      <h1>{`${newsItem.Info.substring(0, 100).trim()}...`}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
            
          </div>
          <div className="col-span-2 bg-red-500">HI</div>
        </div>
        <div className="md:grid md:grid-cols-6 mt-6 md:px-20 gap-12">
          <div className="flex flex-col col-span-4">
            <div className="mb-3">
                <h1 className="bg-red-600 text-white p-3 font-bold">TRAVEL</h1>

            </div>
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:col-span-4">
            {NewsData.map((newsItem) => {
              return (
                <div className="border-1 border-black">
                  <div>
                    <div
                      className="h-[50vh] relative"
                      onMouseEnter={changeColorToRed}
                      onMouseOut={changeColorToBlack}
                      
                    >
                      <img
                        src={newsItem.image}
                        alt="newsImage"
                        className="object-cover h-[100%] w-[100%]  hover:cursor-pointer hover:opacity-80 duration-300"
                      />
                      <h1
                        className={`${color} w-fit p-1 text-white font-semibold px-4 absolute bottom-0`}
                      >
                        {newsItem.Category}
                      </h1>
                    </div>

                    <div className="mt-3 space-y-1">
                      <h1 className="text-2xl font-bold text-black">
                        {newsItem.Title}
                      </h1>
                      <div className="flex space-x-3 text-black font-semibold">
                        <div>{newsItem.Author}</div>
                        <span>-</span>
                        <div>{newsItem.Date}</div>
                      </div>
                      <h1>{`${newsItem.Info.substring(0, 100).trim()}...`}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
            
          </div>
          <div className="col-span-2 bg-red-500">HI</div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
