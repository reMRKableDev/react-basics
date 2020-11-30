import React from "react";
import Experience from "../Experience/ExperienceList";
import Education from "../Education/EducationList";

const About = () => {
  return (
    <div>
      <div style={{ width: "40%", float: "left" }}>
        <Education />
      </div>
      <div style={{ width: "60%", float: "right" }}>
        <Experience />
      </div>
    </div>
  );
};

export default About;