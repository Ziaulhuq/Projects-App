import React from "react";
import InputPage from "../InputPage/InputPage.jsx";
import styles from "./MainPage.module.css";

const MainPage = ({ onAddData }) => {
  return (
    <div className={styles.mainpage}>
      <InputPage onAddData={onAddData} />
    </div>
  );
};

export default MainPage;
