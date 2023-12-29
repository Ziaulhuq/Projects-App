import React from "react";
import styles from "./NoPageSelected.module.css";
import noProjects from "../../assets/no-projects.png";
import Button from "../UI/Button.jsx";

const NoPageSelected = ({ onAddProjects }) => {
  return (
    <div className={styles.nopage}>
      <img src={noProjects} />
      <h4>No projects Added yet.</h4>
      <p>Click the Add projects button to create projects.</p>
      <Button onClick={onAddProjects}>+ Add Projects</Button>
    </div>
  );
};

export default NoPageSelected;
