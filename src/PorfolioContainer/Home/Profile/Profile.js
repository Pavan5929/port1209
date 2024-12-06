import React from "react";
import './Profile.css'
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/Pavan5929">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arravali-pavan-1a910a259/">
              <i class="fab fa-linkedin"></i>
            </a>
           
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello,I'm <span className="highlighted-text">Pavan Arravali</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>FrontEnd Developer</h1>
              <span className="profile-role-tagline">
                Creating Responsive and Intuitive Interfaces
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Pavan_Arravali_Resume.pdf">
              <button className="btn highlighted-btn">My Resume</button>{" "}
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
