import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <div>
        {textarea ? (
          <textarea className={styles.textarea} {...props} ref={ref} />
        ) : (
          <input className={styles.input} {...props} ref={ref} />
        )}
      </div>
    </>
  );
});

export default Input;
