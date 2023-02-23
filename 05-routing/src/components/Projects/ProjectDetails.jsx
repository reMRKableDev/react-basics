import React from "react";
import { myProjects } from "./Projects";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  const getProject = (id) => {
    const theProject = (oneProject) => {
      return oneProject.id === id;
    };
    return myProjects.find(theProject);
  };

  const foundProject = getProject(id);

  return (
    <div>
      <h2>
        {foundProject.name}{" "}
        <span style={{ fontSize: "14px" }}>{foundProject.year}</span>
      </h2>
      <h3>Used technologies: {foundProject.technologies}</h3>
      <p>{foundProject.description}</p>
      <Link to="/projects">Back</Link>
    </div>
  );
};

export default ProjectDetails;
