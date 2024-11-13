import { React } from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({}) {
  return (
    <>
      <SavedNewsHeader></SavedNewsHeader>
      <NewsCardList></NewsCardList>
    </>
  );
}

export default SavedNews;
