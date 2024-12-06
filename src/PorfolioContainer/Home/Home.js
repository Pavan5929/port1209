import React, { useRef } from "react";
import Profile from "./Profile/Profile";
import Footer from './Footer/Footer';
import Header from "./Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import ContactMe from "../ContactMe/ContactMe";
import ScrollToTop from "./scrolltop/ScrollToTop"; // Import the ScrollToTop button
import './Home.css';

export default function Home() {
    const profileRef = useRef(null);
    const aboutMeRef = useRef(null);
    const resumeRef = useRef(null);
    const contactMeRef = useRef(null);

    const scrollToSection = (section) => {
        const sectionRefs = {
            home: profileRef,
            about: aboutMeRef,
            resume: resumeRef,
            contact: contactMeRef,
        };
        sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="content">
            <div className="home-container" ref={profileRef}>
                <Header scrollToSection={scrollToSection} />
                <Profile />
                <Footer />
            </div>
            <div className="about" ref={aboutMeRef}>
                <AboutMe />
            </div>
            <div className="resume" ref={resumeRef}>
                <Resume />
            </div>
            <div className="contact-me" ref={contactMeRef}>
                <ContactMe />
            </div>
            <ScrollToTop /> {/* Add the ScrollToTop button */}
        </div>
    );
}
