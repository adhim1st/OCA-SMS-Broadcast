import React, { useState } from "react";
import Header from "./Header";

const SMSContent = () => {
  const [char, setChar] = useState(0);
  return (
    <div className="sms-container">
      <Header />
      <form>
        <div className="sms-form">
          <label htmlFor="broadcast-name">Broadcast Name</label>
          <input type="text" />
          <label htmlFor="phonebook">Phonebook</label>
          <select name="phonebook" id="phonebook">
            <option value="phonebook-1">Phonebook 1</option>
            <option value="phonebook-2">Phonebook 2</option>
            <option value="phonebook-3">Phonebook 3</option>
          </select>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            maxLength="1024"
            onChange={(e) => {
              setChar(e.target.value.length);
            }}
          >
            Halo Bili, perkenalkan kami OCA (Omni Communication Assistant).
            Aplikasi berbasis web yang bisa membantu kamu menyebarkan pesan baik
            itu menggunakan voice ataupun text. Kamu bisa menjangkau seluruh
            konsumen dengan cepat, masif, dan otomatis. Info lebih lanjut
            kunjungi web kami www.ocatelkom.co.id
          </textarea>
          <p>Character {char}/1024</p>
        </div>
        <div className="schedule">
          <div className="schedule-info">
            <h2>Schedule</h2>
            <p>When and how often do you want to broadcast this messages?</p>
          </div>
          <div className="schedule-input">
            <label htmlFor="schedule"></label>
            <div className="day-input"></div>
            <div className="time-input"></div>
            <div className="interval-input"></div>
            <button>Send messages</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SMSContent;
