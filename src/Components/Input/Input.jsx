import React from "react";
import styles from "./Input.module.css";

function Input({ textarea, label, ...props }) {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <div>
        {textarea ? (
          <textarea className={styles.textarea} {...props} />
        ) : (
          <input className={styles.input} {...props} />
        )}
      </div>
    </>
  );
}

export default Input;
