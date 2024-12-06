import React from "react";
import './Header.css';

export default function Header({ scrollToSection }) {
    return (
        <div className="header-container">
            <div className="header-parent">
                <div className="header-logo">
                    <span>Pavan Arravali</span>
                </div>
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                <div className="header-options">
                    <label htmlFor="menu-toggle" className="close-icon">&times;</label>
                    <div className="header-option">
                        <a onClick={() => scrollToSection("home")} href="#home">Home</a>
                        <a onClick={() => scrollToSection("about")} href="#about">About Me</a>
                        <a onClick={() => scrollToSection("resume")} href="#resume">Resume</a>
                        <a onClick={() => scrollToSection("contact")} href="#contact">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
