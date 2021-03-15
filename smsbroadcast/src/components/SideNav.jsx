import React from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../img/OCA-logo.svg";
import homeIcon from "../img/house-black-silhouette-without-door.svg";
import messageIcon from "../img/chat-bubbles-with-ellipsis.svg";
const sideNav = () => {
  return (
    <nav className="sideNav-container">
      <img src={navLogo} alt="" />
      <div className="sideNav-menu">
        <NavLink className="btn" to="/home" activeClassName="btn-active">
          <img src={homeIcon} alt="" />
          <p>Home</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default sideNav;
