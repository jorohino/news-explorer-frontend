import { React } from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({}) {
  return (
    <header className="header">
      <div className="header__nav-container">
        <Navigation />
      </div>
      <div className="header__text-container">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <div className="header__search-container">
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
