import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>About ME</span>
        <div className="screen-sub-heading">
          <span>Why choose me</span>
        </div>
      </div>
      <div className="heading-separator">
        <div className="seperator-line">
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
      <div className="about-me-container">
        <div className="about-me-parent">
          <div className="about-me-card">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
              <span className="about-me-description">
                Hi, I'm Pavan Arravali, a passionate and dedicated Frontend
                Developer with a strong foundation in creating responsive,
                user-friendly, and visually appealing web interfaces. I have a
                keen eye for detail and a love for turning complex designs into
                seamless, functional experiences. I specialize in HTML, CSS,
                JavaScript, and modern frontend frameworks to build interactive
                and dynamic websites. My experience includes working on a
                variety of projects, from simple landing pages to complex web
                applications, all with a focus on performance and accessibility.
              </span>
              <div className="about-me-highlights">
                <span className="highlight-heading">
                    Skill
                </span>
                <span className="highlight"><span className="highlight-blob"></span>frontend developer</span>
              </div>
              <div className="about-me-options">
                <button className="btn primary-btn  hire">Hire Me</button>
                <a href="Pavan_Arravali_Resume.pdf">
                  <button className="btn highlighted-btn">My Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
