import React, { useState } from "react";

const SMSForm = () => {
  const [char, setChar] = useState(0);
  return (
    <div className="sms-form-container">
      <h1>SMS Scheduller</h1>
      <form className="sms-form">
        <div className="broadcast-name">
          <label htmlFor="broadcast-name">Broadcast Name</label>
          <input type="text" placeholder="name of your broadcast" />
        </div>
        <div className="phonebook">
          <label htmlFor="phonebook">Phonebook</label>
          <select name="phonebook" id="phonebook" required>
            <option value="" disabled selected hidden>
              Select your phonebook
            </option>
            <option value="phonebook-1">Phonebook 1</option>
            <option value="phonebook-2">Phonebook 2</option>
            <option value="phonebook-3">Phonebook 3</option>
          </select>
        </div>
        <div className="messages">
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
        <hr className="separation"></hr>
        <div className="schedule-info">
          <h2>Schedule</h2>
          <p>When and how often do you want to broadcast this messages?</p>
        </div>
        <div className="schedule-form">
          <label htmlFor="schedule">Run on</label>
          <div className="schedule-input">
            <div className="day-input">
              <div className="day-checkbox">
                <input type="checkbox" name="schedule" value="monday" />
                <label htmlFor="mon">Mon</label>
              </div>
              <div className="day-checkbox">
                <input type="checkbox" name="schedule" value="tuesday" />
                <label htmlFor="tue">Tue</label>
              </div>
              <div className="day-checkbox">
                <input type="checkbox" name="schedule" value="wednesday" />
                <label htmlFor="wed">Wed</label>
              </div>
              <div className="day-checkbox">
                <input type="checkbox" name="schedule" value="thursday" />
                <label htmlFor="thu">Thu</label>
              </div>
              <div className="day-checkbox">
                <input type="checkbox" name="schedule" value="friday" />
                <label htmlFor="fri">Fri</label>
              </div>
              <div className="day-checkbox">
                <input type="checkbox" name="schedule" value="saturday" />
                <label htmlFor="sat">Sat</label>
              </div>
              <div className="day-checkbox">
                <input type="checkbox" name="schedule" value="sunday" />
                <label htmlFor="sun">Sun</label>
              </div>
            </div>
            <div className="time-input">
              <div className="radio-btn">
                <label htmlFor="once-a-day" className="radio-container">
                  Once a day
                  <input type="radio" name="once-a-day" id="once-a-day" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="day-time">
                <label htmlFor="at">At</label>
                <span className="day-time-ampm">AM</span>
                <input type="number" name="at" id="at" min="1" max="24" />
                <span className="wib">WIB</span>
              </div>
            </div>
            <div className="interval-input">
              <div className="radio-btn">
                <label htmlFor="at-intervals" className="radio-container">
                  At Intervals
                  <input type="radio" name="at-intervals" id="at-intervals" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="intervals-time">
                <label htmlFor="interval-input">Every</label>
                <input
                  type="number"
                  name="interval-input"
                  id="interval-input"
                  placeholder="day"
                  min="1"
                />

                <input
                  type="number"
                  name="interval-hours"
                  id="interval-hours"
                  placeholder="hours"
                  min="1"
                />
                <div className="interval-container">
                  <label htmlFor="from">from</label>
                  <span className="interval-container-ampm">AM</span>
                  <input type="number" name="from" id="from" min="1" max="24" />
                  <span className="wib">WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="send-msg-btn">Send messages</button>
      </form>
    </div>
  );
};

export default SMSForm;
