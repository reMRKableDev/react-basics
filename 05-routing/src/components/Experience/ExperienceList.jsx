import React from "react";
import placesWhereIWorked from "./experienceData.json";
import Experience from "./Experience";

const ExperienceList = () => {
  return (
    <div className="">
      <h2>Work Experience:</h2>
      {placesWhereIWorked.map((eachPlace, index) => (
        <Experience key={index} {...eachPlace} />
      ))}
    </div>
  );
};

export default ExperienceList;
