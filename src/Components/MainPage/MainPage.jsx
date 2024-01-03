import React from "react";
import InputPage from "../InputPage/InputPage.jsx";
import styles from "./MainPage.module.css";

const MainPage = ({ onAddData, onCancel }) => {
  return (
    <div className={styles.mainpage}>
      <InputPage onAddData={onAddData} onCancel={onCancel} />
    </div>
  );
};

export default MainPage;
