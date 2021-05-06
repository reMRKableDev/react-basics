import React from "react";
import Education from "./Education";
import { educationList } from "../../data";

const EducationList = () => {
  return (
    <div>
      <h2>Education:</h2>
      {educationList.map((eachSchool, index) => (
        <Education key={index} {...eachSchool} />
      ))}
    </div>
  );
};

export default EducationList;
