// Home.js

import React from "react";
import "./Home.css";

function Home() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1.",
    },
    {
      title: "Project 2",
      description: "Description of Project 2.",
    },
    {
      title: "Project 3",
      description: "Description of Project 3.",
    },
  ];

  return (
    <div className="Home">
      <div className="profile-section">
        <img
          src="images/contibutor1.png"
          alt="My Photo"
          className="profile-photo"
        />
        <h2>Hi, I'm Your Name</h2>
        <p>
          Welcome to my portfolio. I am a passionate developer with a focus on
          [Your Specialization].
        </p>
      </div>

      <div className="projects-section">
        <h2>My Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
