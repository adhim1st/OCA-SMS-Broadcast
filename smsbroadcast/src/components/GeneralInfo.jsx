import React from "react";

const GeneralInfo = () => {
  return (
    <div className="general-info-container">
      <h2>Remaining Quota</h2>
      <div className="general-info">
        <div className="call">
          <p>Call</p>
          <h3>4840 seconds</h3>
        </div>
        <div className="sms">
          <p>SMS</p>
          <h3>1254 messages</h3>
        </div>
        <div className="email">
          <p>Email</p>
          <h3>7710 mails</h3>
        </div>
        <div className="whatsapp">
          <p>Whatsapp</p>
          <h3>330 messages</h3>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
