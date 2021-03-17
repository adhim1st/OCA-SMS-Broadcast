import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../img/OCA-logo.svg";
import homeIcon from "../img/house-black-silhouette-without-door.svg";
import messageIcon from "../img/chat-bubbles-with-ellipsis.svg";
import dropdownIcon from "../img/Rectangle 557.svg";
import arrowUp from "../img/arrowup.svg";
import arrowDown from "../img/arrowdown.svg";
const SideNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prevCheck) => !prevCheck);
  };
  return (
    <nav className="sideNav-container">
      <img src={navLogo} alt="navLogo" />
      <div className="sideNav-menu">
        <NavLink className="btn" to="/home" activeClassName="btn-active">
          <img src={homeIcon} alt="homeIcon" />
          <span>Home</span>
        </NavLink>
        <div className="dropdown-menu">
          <a className="dropdown-btn" onClick={handleShowMenu}>
            <img src={messageIcon} alt="messageIcon" />
            <span>SMS</span>
            {showMenu ? (
              <img src={arrowUp} className="dropdown-icon" />
            ) : (
              <img src={arrowDown} className="dropdown-icon" />
            )}
          </a>
          {showMenu ? (
            <div className="sms-dropdown">
              <NavLink
                to="/broadcast"
                className="dropdown-sub"
                activeClassName="btn-sub-active"
              >
                <img src={dropdownIcon} alt="dropdownIcon" />
                <span>Broadcast</span>
              </NavLink>
              <NavLink
                to="sms-scheduller"
                className="dropdown-sub"
                activeClassName="btn-sub-active"
              >
                <img src={dropdownIcon} alt="dropdownIcon" />
                <span>SMS Scheduller</span>
              </NavLink>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
