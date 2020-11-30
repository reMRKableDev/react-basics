import React from "react";

const Experience = (props) => {
  const checkJobEnded = (end) => {
    let endYear;
    if (end === "") {
      endYear = "current";
    } else {
      endYear = end;
    }
    return endYear;
  };

  return (
    <div className="experience-content">
      <h3>{props.name}</h3>
      <p>
        {props.city}, {props.country}
      </p>
      <h4>{props.jobTitle}</h4>
      <p>{props.jobDescription}</p>
      <p>
        {props.jobStarted} - {checkJobEnded(props.jobEnded)}
      </p>
    </div>
  );
};

export default Experience;
