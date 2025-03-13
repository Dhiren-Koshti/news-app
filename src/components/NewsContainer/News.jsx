import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";
import "./News.css";

export default function News(props) {
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  document.title = `Taaza Khabar On - ${
    props.category.charAt(0).toUpperCase() + props.category.slice(1)
  }`;

  const fetchNews = async () => {
    try {
      props.setProgress(5);
      setLoader(true);

        let response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category} `
        );

      props.setProgress(20);

      // let response = await fetch("/data/news.json");

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      props.setProgress(50);

      let data = await response.json();

      if (!data || !data.articles) {
        throw new Error("Invalid response data.");
      }

      props.setProgress(70);

      setNews(data.articles);
      setLoader(false);
      settotalResults(data.totalResults);

      props.setProgress(100);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-line
  }, []);

  const fetchMoreData = async () => {
    try {
      setLoader(true);

      // let response = await fetch("/data/news.json");

        let response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
            props.apiKey
          }&page=${page + 1}&pageSize=${props.pageSize}&category=${
            props.category
          } `
        );

      setPage((prevPage) => prevPage + 1);

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      let data = await response.json();

      if (!data || !data.articles) {
        throw new Error("Invalid response data.");
      }

      setNews((prevNews) => prevNews.concat(data.articles));
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <div className="news-section">
      <h1 className="news-heading">Latest News</h1>

      <InfiniteScroll
        dataLength={news.length}
        next={fetchMoreData}
        hasMore={news.length <= totalResults}
        style={{ overflow: "hidden" }}
        loader={loader && <Spinner />}
      >
        <div className="news-grid">
          {news.map((currEle, index) => (
            <NewsItem
              key={`${currEle.url}-${index}`}
              title={currEle.title}
              description={currEle.description}
              imageUrl={
                currEle.urlToImage
                  ? currEle.urlToImage
                  : "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5ld3N8ZW58MHx8fHwxNjg5MTg0NjIw&ixlib=rb-1.2.1&q=80&w=400"
              }
              newsUrl={currEle.url}
              author={currEle.author}
              date={currEle.publishedAt}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
