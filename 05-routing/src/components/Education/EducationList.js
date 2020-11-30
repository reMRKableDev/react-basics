import React from "react";
import Education from "./Education";
import myEducation from "./educationData.json";

const EducationList = () => {
  return (
    <div>
      <h2>Education:</h2>
      {myEducation.map((eachSchool, index) => (
        <Education key={index} {...eachSchool} />
      ))}
    </div>
  );
};

export default EducationList;
