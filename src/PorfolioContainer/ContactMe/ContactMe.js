import React from "react";
import "./ContactMe.css";
import emailImage from "../../email2b.jpg";
export default function ContactMe() {
  return (
    <>
      <div className="main-container-let">
        <div className="heading">
          <div className="subHeading">Lets keep in touch</div>
          <span className="title">Contact Me</span>
        </div>
      </div>
      <div className="main-container">
        <div className="central-form">
          <div className="col">
            <h2>Get in Touch</h2>
            <a href="https://github.com/Pavan5929">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arravali-pavan-1a910a259/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="back-form">
            <div className="img-back">
              <h4>Send your email here</h4>
              <img src={emailImage} alt="image not found" />
            </div>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" />
              <label htmlFor="email">email</label>
              <input type="email" />
              <label htmlFor="message">Message</label>
              <textarea type="text" />
              <div className="send-btn">
                <button type="submit">
                  send
                  <i className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
