import { React } from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

function SavedNews({}) {
  return (
    <>
      <SavedNewsHeader></SavedNewsHeader>
      <SavedNewsCardList></SavedNewsCardList>
    </>
  );
}

export default SavedNews;
