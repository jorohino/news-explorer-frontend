import { React } from "react";
import "./NewsCard.css";
import testImage from "../../assets/test.png";

function NewsCard({}) {
  return (
    <div className="news-card">
      <img className="news-card__image" src={testImage}></img>
      <div className="news-card__text-container">
        <p className="news-card__date">November 4, 2020</p>
        <h1 className="news-card__title">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h1>
        <p className="news-card__description">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className="news-card__source">Treehugger</p>
      </div>
    </div>
  );
}

export default NewsCard;
