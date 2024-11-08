import { React } from "react";
import "./Navigation.css";

// TO DO: Contents of navigation__btn-container should change dependent on logged in status:
//   Logged out/Guest = Home, Sign in
//   Logged in/User = Home, Saved articles, [username, logout logo]

function Navigation({}) {
  return (
    <div className="navigation">
      <h1 className="navigation__title">NewsExplorer</h1>
      <div className="navigation__btn-container">
        <button className="navigation__home-btn">Home</button>
        <button className="navigation__signin-btn">Sign in</button>
      </div>
    </div>
  );
}

export default Navigation;
