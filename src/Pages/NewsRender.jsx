import React, { useReducer, useEffect, useState } from "react";
import NewsData from "../assets/images/NewsData";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AdBoard from "../Components/AdBoard";
import Footer from "../Components/Footer";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "toggleIsSelected":
      return { ...state, isSelected: !state.isSelected };
    default:
      new Error();
  }
}

const NewsRender = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    isSelected: false,
  });
  const { id } = useParams();

  const myNews = props.myNewsData;
  const content = myNews[id];

  console.log(myNews);

  //const [count, setCount] = useState(0);
  // console.log(props);

  // function increment(){
  //   dispatch({type: "increment"})
  // }
  // function decrement(){
  //   dispatch({type: "decrement"})
  // }
  // function toggleIsSelected(){
  //   dispatch({type: "toggleIsSelected"})
  // }

  return (
    <div className="">
      <Navbar />
      {/* 
      THIS IS NOT PART OF THE CODE */}

      {/* <p onClick={increment}>+</p>
      <div className={state.isSelected ? "text-green-700" : "text-red-700"}>{state.count}</div>
      <p onClick={decrement}>-</p>
      <p onClick={toggleIsSelected}>Change Color</p> */}

      {/* CODE STARTS HERE */}
      <div className="mt-20">
        <AdBoard />
        <section className="news--info  px-20 my-10 flex flex-col space-y-5">
          <h1 className="bg-red-500 w-fit py-2 px-10 text-lg text-white font-semibold">
            {content.Category}
          </h1>
          <h1 className="font-bold text-5xl">{content.Title}</h1>
          <div className="flex  space-x-5">
            <h1>{content.Author}</h1>
            <h1>{content.Date}</h1>
          </div>
          <div className="flex space-x-5">
            <div className="bg-blue-800 cursor-pointer hover:shadow-inner hover:shadow-blue-200  duration-300 hover:brightness-75 py-3 px-10 text-white font-semibold">
              Share on Facebook
            </div>

            <div className="bg-blue-500 hover:shadow-inner hover:shadow-blue-100 hover:brightness-75 duration-300 cursor-pointer py-3 px-10 text-white font-semibold">
              Share on Twitter
            </div>
          </div>
        </section>

        <section className="px-20 grid grid-cols-5 gap-10">
          <main className="col-span-4 bg-red-400">
            <div className=" mb-10 text">
              <img src={content.image} alt="" className="w-[100%] h-[100vh]  object-cover" />
            </div>
            <div className="text-lg">{content.Info}</div>
          </main>

          <div className="flex flex-col space-y-5">
          <div className="text-lg font-semibold  text-center">
            More News
          </div>
            {
              myNews.map((newItem, index)=>{
                    return (
                      <div className="">
                        <Link to={`/news/${index}`}>
                        <div className="relative mb-3">
                          <div><img src={newItem.image} alt=""  /></div>
                          <div className="absolute bg-red-500 py-[3px] px-[6px] text-white bottom-0">{index + 1}</div>
                        </div>
                        <h1 className="font-bold text-xl">
                          {newItem.Title}
                        </h1>
                        <div className="text-xs flex space-x-4">
                          <h1>
                            By <span className="text-red-400 font-bold">{newItem.Author}</span>
                          </h1>
                          <h1>{newItem.Date}</h1>
                        </div>
                        </Link>
                      </div>
                    )
              })
            }
          </div>
        </section>
      </div>

      {/* <h1>News ID: {id}</h1>
      <img src={myNews[id].image} alt="" />
      <h1>Author: {myNews[id].Author}</h1>
      <p>Text: {myNews[id].Info}</p> */}
      <Footer />
    </div>
  );
};

export default NewsRender;
