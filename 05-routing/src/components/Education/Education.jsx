import React from "react";

const Education = (props) => {
  return (
    <div>
      <h3>{props.schoolName}</h3>
      <p>
        {props.city}, {props.country}
      </p>
      <h4>{props.degree}</h4>
      <p>
        {props.schoolStarted} - {props.schoolEnded}
      </p>
    </div>
  );
};

export default Education;
