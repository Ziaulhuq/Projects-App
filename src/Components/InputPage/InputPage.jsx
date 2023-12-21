import React from "react";
import Input from "../Input/Input";
import Button from "../UI/Button";
import styles from "./InputPage.module.css";

const InputPage = () => {
  return (
    <>
      <div className={styles.buttons}>
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.save}>Save</button>
      </div>
      <Input type="text" rows={3} label="Name" />
      <Input type="textarea" label="description" textarea />
      <Input type="date" label="date" />
    </>
  );
};

export default InputPage;
