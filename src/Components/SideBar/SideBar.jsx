import React from "react";
import styles from "./SideBar.module.css";
import Button from "../UI/Button.jsx";

const SideBar = ({ onAddProjects }) => {
  return (
    <div className={styles.sidebar}>
      <h4>MY PROJECTS</h4>
      <Button onClick={onAddProjects}>+ Add Projects</Button>
    </div>
  );
};

export default SideBar;
