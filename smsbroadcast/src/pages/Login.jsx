import React from "react";
import logo from "../img/Asset 29 1.png";
const login = () => {
  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="login-form">
          <img src={logo} />
          <p>Welcome Back, Please login into your account</p>
          <label htmlFor="email">Username /Email</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <div className="stack">
            <input type="password" />
            <a>Forgot?</a>
          </div>
          <button>sign in</button>
        </div>
      </div>
      <div className="bg-container"></div>
    </div>
  );
};

export default login;
