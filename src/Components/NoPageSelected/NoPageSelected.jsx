import React from "react";
import styles from "./NoPageSelected.module.css";
import noProjects from "../../assets/no-projects.png";
import Button from "../UI/Button.jsx";

const NoPageSelected = () => {
  return (
    <div className={styles.nopage}>
      <img src={noProjects} />
      <p>No projects Added yet.</p>
      <h4>Click the Add projects button to create projects.</h4>
      <Button>+ Add Projects</Button>
    </div>
  );
};

export default NoPageSelected;
