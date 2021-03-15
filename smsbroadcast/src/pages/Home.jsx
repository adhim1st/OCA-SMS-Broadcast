import React from "react";
import HomeContent from "../components/HomeContent";
import SideNav from "../components/SideNav";

const home = () => {
  return (
    <div className="wrapper">
      <SideNav />
      <HomeContent />
    </div>
  );
};

export default home;
