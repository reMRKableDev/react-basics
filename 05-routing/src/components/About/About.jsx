import React from "react";
import Experience from "../Experience/ExperienceList";
import Education from "../Education/EducationList";

const About = () => {
  return (
    <div className="columns">
      <div className="column">
        <Education />
      </div>
      <div className="column">
        <Experience />
      </div>
    </div>
  );
};

export default About;
