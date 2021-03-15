import React from "react";
import GeneralInfo from "./GeneralInfo";
import Header from "./Header";
import Table from "./Table";
const HomeContent = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="welcome">
        <div className="welcome-container">
          <h1>Hello, Welcome to OCA!</h1>
          <p>
            Let’s start make some noise and make your campaign great again!
            click here to spread your messages.
          </p>
        </div>
      </div>
      <div className="table">
        <GeneralInfo />
        <Table />
      </div>
    </div>
  );
};

export default HomeContent;
