import React from "react";
import Navbar from "../Components/Navbar";
//import NewsData from "../assets/images/NewsData";
import AdBoard from "../Components/AdBoard";
import { useState } from "react";
import Footer from "../Components/Footer";
import NewsData from "../assets/images/NewsData";
import { useEffect } from "react";

const Homepage = (props) => {
    const [color, setColor] = useState("bg-black");

    

    let headlines = props.headlines

    console.log(headlines)

    
    

    
     headlines ? headlines.map(value => {
            console.log(value.content) ;  // You can modify this part based on what you want to do with each item
          }) : ""
   
    


        
    // headlines.map((newsItem, index) => {
    //   return (
    //     <div className={`${index == 0 ? "col-span-2" : "col-span-1"} border-1 border-black `}>
    //       <div className="relative md:h-[70vh] h-[30vh]">
    //         <img
    //           src={urlToImage}
    //           alt="newsImage"
    //           className="object-cover h-[100%] w-[100%] opacity-90 hover:cursor-pointer hover:scale-105 hover:opacity-100 duration-500"
    //         />
    //         <div className="absolute md:bottom-12 bottom-3 md:left-8 left-3 space-y-2">
    //           <h1 className="bg-red-500 w-fit p-1 text-white font-semibold px-4">
    //             {newsItem.Category}
    //           </h1>
    //           <h1 className="md:text-4xl font-bold text-white">
    //             {newsItem.title}
    //           </h1>
    //           <div className="flex space-x-3 text-white font-semibold">
    //             <div>{newsItem.author}</div>
    //             <span>-</span>
    //             <div>{newsItem.Date}</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // })

  //let headlineNews = dynamicNewData.slice(0, 3)

  //console.log(headlines)



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

    {props ? (<div>
      <Navbar />
      <div className="mt-20">
      <AdBoard />
      <div className="md:flex grid grid-cols-2 gap-1 md:space-x-5 mt-8 md:px-20">
           { headlines ? (
            headlines.map((newsItem, index) => {
                return (
                  <div className={`${index == 0 ? "col-span-2" : "col-span-1"} border-1 border-black `}>
                    <div className="relative md:h-[70vh] h-[30vh]">
                      <img
                        src={newsItem.urlToImage}
                        alt="newsImage"
                        className="object-cover h-[100%] w-[100%] opacity-90 hover:cursor-pointer hover:scale-105 hover:opacity-100 duration-500"
                      />
                      <div className="absolute md:bottom-12 bottom-3 md:left-8 left-3 space-y-2">
                        <h1 className="bg-red-500 w-fit p-1 text-white font-semibold px-4">
                          {newsItem.Category}
                        </h1>
                        <h1 className="md:text-4xl font-bold text-white">
                          {newsItem.title}
                        </h1>
                        <div className="flex space-x-3 text-white font-semibold">
                          <div>{newsItem.author}</div>
                          <span>-</span>
                          <div>{newsItem.publishedAt}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
           ) : ""
        
        
        }   
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
            {headlines.map((newsItem) => {
              return (
                <div className="border-1 border-black  mb-10 ">
                  <div>
                    <div className="md:h-[50vh] h-[30vh] relative">
                      <img
                        src={newsItem.urlToImage}
                        alt="newsImage"
                        className="object-cover h-[100%] w-[100%]  hover:cursor-pointer hover:opacity-80 duration-300"
                      />
                      <h1 className="bg-black w-fit p-1 text-white font-semibold px-4 absolute bottom-0">
                        {newsItem.Category}
                      </h1>
                    </div>

                    <div className="mt-3 space-y-1">
                      <h1 className="text-2xl font-bold text-black">
                        {newsItem.title}
                      </h1>
                      <div className="flex space-x-3 text-black font-semibold">
                        <div className="text-red-500"> {newsItem.author}</div>
                        <span>-</span>
                        <div>{newsItem.publishedAt}</div>
                      </div>
                      <h1>{
                      
                      `${newsItem.content}`}</h1>
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
            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 col-span-4 mb-10">
            {headlines.map((newsItem) => {
              return (
                <div className="border-1 border-black">
                  <div>
                    <div
                      className="md:h-[50vh] h-[30vh] relative"
                      onMouseEnter={changeColorToRed}
                      onMouseOut={changeColorToBlack}
                      
                    >
                      <img
                        src={newsItem.urlToImage}
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
                        {newsItem.title}
                      </h1>
                      <div className="flex space-x-3 text-black font-semibold">
                        <div>{newsItem.author}</div>
                        <span>-</span>
                        <div>{newsItem.publishedAt}</div>
                      </div>
                      <h1>{`${newsItem.content}...`}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
            
          </div>
          <div className="col-span-2 bg-red-500 text-center">AD</div>
        </div>
        <div className="md:grid md:grid-cols-6 md:mt-6 md:px-20 px-5 gap-12 mt-10">
          <div className="flex flex-col col-span-4">
            <div className="mb-3">
                <h1 className="bg-red-600 text-white p-3 font-bold">TRAVEL</h1>

            </div>
            <div className="flex flex-col md:space-y-0 space-y-8 md:flex-row md:space-x-8 md:col-span-4">
            {headlines.map((newsItem) => {
              return (
                <div className="border-1 border-black">
                  <div>
                    <div
                      className="md:h-[50vh] h-[30vh] relative"
                      onMouseEnter={changeColorToRed}
                      onMouseOut={changeColorToBlack}
                      
                    >
                      <img
                        src={newsItem.urlToImage}
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
                        {newsItem.title}
                      </h1>
                      <div className="flex space-x-3 text-black font-semibold">
                        <div>{newsItem.Author}</div>
                        <span>-</span>
                        <div>{newsItem.Date}</div>
                      </div>
                      <h1>{`${newsItem.content}...`}</h1>
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
    </div>) : (<div>Loading</div>)}
    </div>
  );
};

export default Homepage;
