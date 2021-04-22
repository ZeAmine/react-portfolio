import React, { useState } from "react";
import "../styles/Projects.css";
import Project from "./Project";
import data from "../data";

const Projects = () => {
  const [works, setWorks] = useState(data);

  return (
    <section className="projects">
      <div className="pre-title container">
        <h2>LISTE DES PROJETS</h2>
        <div className="underline"></div>
      </div>
      <div className="project-list">
        {works.map((work, index) => (
          <Project key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
