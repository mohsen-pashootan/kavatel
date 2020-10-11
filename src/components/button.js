import React from "react";
import styles from "./button.module.scss";

export default function Button({ text, onSubmit }) {
  return (
    <button className={styles["submit_btn"]} onClick={onSubmit}>
      {text}
    </button>
  );
}
