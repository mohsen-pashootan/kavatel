import React from "react";
import styles from "./frame.module.scss";

export default function Frame({ children }) {
  return (
    <div className={styles["app-wrapper"]}>
      <div className={styles["app-container"]}>{children}</div>
    </div>
   
  );
}
