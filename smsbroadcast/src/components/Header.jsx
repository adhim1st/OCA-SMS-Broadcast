import React from "react";
import searcIcon from "../img/Group 127.svg";
import profileIcon from "../img/Group 126.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <img src={searcIcon} alt="" />
        <input type="text" placeholder="Any help?" />
      </div>
      <div className="profile">
        <div className="profile-container">
          <div className="profile-name">
            <h3>Hi, Adjie!</h3>
            <p>Adjie_g4ant3ng@banget.com</p>
          </div>
          <div className="profile-pict">
            <img src={profileIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
