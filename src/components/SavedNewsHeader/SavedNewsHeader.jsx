import { React } from "react";
import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";

function SavedNewsHeader({}) {
  return (
    <header className="saved-news-header">
      <div className="saved-news-header__nav-container">
        <Navigation />
      </div>
      <div className="saved-news-header__text-container">
        <p className="saved-news-header__subtitle">Saved articles</p>
        <h1 className="saved-news-header__title">
          [User], you have [#] saved articles
        </h1>
        <div className="saved-news-header__keywords">
          <p className="saved-news-header__keywords-text">By keywords: </p>
          <p className="saved-news-header__keywords-list"> [ Keywords ]</p>
        </div>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
