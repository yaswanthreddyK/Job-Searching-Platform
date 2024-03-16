import React, { useState } from "react";
import "./Join.scss";
import { Link, useLocation } from "react-router-dom";

function Join() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="join-container">
      <p className="heading">Join as a Hirer or Skilled Professional</p>
      <div className="flex-card">
        <div
          className={`card ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <img src="./img/Talent.png" className="join-img" />
          <p className="join-txt">I’m Seeking Talent</p>
        </div>
        <div
          className={`card ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <img src="./img/Jobs.png" className="join-img" />
          <p className="join-txt">I’m Seeking Jobs</p>
        </div>
      </div>
      <div className="center-content">
        <Link to="/">
          <button className="create-btn">Create Account</button>
        </Link>
        <p className="login-txt">
          Alredy have an account?
          <span className="green-login-txt">Log In</span>
        </p>
      </div>
    </div>
  );
}

export default Join;
