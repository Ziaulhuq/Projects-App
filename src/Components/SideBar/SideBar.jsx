import React from "react";
import styles from "./SideBar.module.css";
import Button from "../UI/Button.jsx";

const SideBar = ({ onAddProjects, projects, onSelectProjects }) => {
  return (
    <div className={styles.sidebar}>
      <h4>MY PROJECTS</h4>
      <Button onClick={onAddProjects}>+ Add Projects</Button>
      <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Button onClick={onSelectProjects}>{project.name}</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
