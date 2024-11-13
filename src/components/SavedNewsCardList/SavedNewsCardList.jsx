import { React } from "react";
import "./SavedNewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNewsCardList({}) {
  return (
    <div className="saved-news-card-list">
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
    </div>
  );
}

export default SavedNewsCardList;
