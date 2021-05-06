import React from "react";
import { experienceList } from "../../data";
import Experience from "./Experience";

const ExperienceList = () => {
  return (
    <div className="">
      <h2>Work Experience:</h2>
      {experienceList.map((eachPlace, index) => (
        <Experience key={index} {...eachPlace} />
      ))}
    </div>
  );
};

export default ExperienceList;
