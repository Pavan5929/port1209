import React, { useState } from "react";
import './Resume.css';

export default function Resume() {
  const [activeSection, setActiveSection] = useState('education');

  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-heading">
          <span className="h-r">Resume</span>
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="resume-bullet-details">
                <div className="list" onClick={() => setActiveSection('education')}>Education</div>
                <div className="list" onClick={() => setActiveSection('work')}>Work History</div>
                <div className="list" onClick={() => setActiveSection('skills')}>Programming Skills</div>
                <div className="list" onClick={() => setActiveSection('projects')}>Projects</div>
                <div className="list" onClick={() => setActiveSection('interests')}>Interests</div>
              </div>
            </div>

            <div className="section-details">
              {activeSection === 'education' && (
                <div className="experience-description">
                  <p><span className="custom-bullet">•</span><strong>B.Tech in Computer Science Engineering</strong>, Teegala Krishna Reddy Engineering College, Hyderabad, Telangana (Graduation: 2024)</p>
                  <p><span className="custom-bullet">•</span><strong>Intermediate</strong>, Chaitanya Junior College, Hyderabad, Telangana</p>
                  <p><span className="custom-bullet">•</span><strong>Secondary School Certificate</strong>, St. Maria High School, Hyderabad, Telangana</p>
                </div>
              )}

              {activeSection === 'work' && (
                <div className="experience-description">
                  <p><span className="custom-bullet">•</span><strong>Data Science Intern</strong> at [Company Name], Hyderabad, Telangana (2023)</p>
                  <p><span className="custom-bullet">•</span><strong>Python Intern</strong> at [Company Name], Hyderabad, Telangana (2022)</p>
                </div>
              )}

              {activeSection === 'skills' && (
                <div className="skill-parent">
                   <div className="programming-skills-container">
                  <p><span className="custom-bullet">•</span>C</p>
                  <p><span className="custom-bullet">•</span>Python</p>
                  <p><span className="custom-bullet">•</span>HTML</p>
                                    <p><span className="custom-bullet">•</span>CSS</p>
                  <p><span className="custom-bullet">•</span>React.js</p>
                  <p><span className="custom-bullet">•</span>SQL</p>
                 
                </div>
                </div>
              )}

              {activeSection === 'projects' && (
                <div className="experience-description">
                  <p><span className="custom-bullet">•</span><strong>Booking Parking Slot Using Machine Learning</strong> (2023): Developed a system for booking parking spaces in advance.</p>
                  <p><span className="custom-bullet">•</span><strong>Smart Voting System Using Deep Learning and Computer Vision</strong> (2024): Created a secure online voting system.</p>
                </div>
              )}

              {activeSection === 'interests' && (
                <div className="experience-description">
                  <p><span className="custom-bullet">•</span>Coding</p>
                  <p><span className="custom-bullet">•</span>Listening to music</p>
                  <p><span className="custom-bullet">•</span>Watching movies</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
