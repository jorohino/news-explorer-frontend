import { React } from "react";
import "./Main.css";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";

function Main({}) {
  return (
    <>
      <Header />
      <main className="main">
        <NewsCardList />
        <About />
      </main>
    </>
  );
}

export default Main;
