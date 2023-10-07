import { useState } from "react";
import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsRender from "./Pages/NewsRender";
import { useEffect } from "react";
import NewsData from "./assets/images/NewsData";

function App() {
  const [newsData, setNewsData] = React.useState(null);
  const [headLineNews, setHeadLineNews] = React.useState(NewsData);

  useEffect(() => {
    const apiKey = "06e5a310bc854bf1957980b25efae859"; // Replace with your actual API key from NewsAPI

    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    const url2 =
      "https://newsdata.io/api/1/news?apikey=pub_30740a7eed2b2474f460ae171aad0e8f00183&q=pizza";

    const url3 =
    "https://api.mediastack.com/v1/news?access_key=159f5841c867914c21883c3c1634864b";

    fetch(url3)
      .then(async (response) => {
        if (!response.ok) {
          // throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {


        setNewsData(data);
        console.log(data.data)
        let slicedHeadlines = data.data.slice(0, 3)
        console.log(slicedHeadlines)
        console.log(`headline set to ${slicedHeadlines}`)
        setHeadLineNews(slicedHeadlines)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage newData={newsData} headlines={headLineNews} />}
        />
        <Route path="/news" element={<NewsRender newData={newsData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
