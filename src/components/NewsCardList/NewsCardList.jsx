import { React } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({}) {
  return (
    <div className="news-card-list">
      <h1 className="news-card-list__header">Search results</h1>
      <div className="news-card-list__container">
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
      </div>
      <button className="news-card-list__show-more-btn">Show more</button>
    </div>
  );
}

export default NewsCardList;
