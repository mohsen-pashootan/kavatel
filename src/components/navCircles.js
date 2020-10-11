import React from "react";
import styles from "./navCircles.module.scss";

export default function NavCircles({ mode, dotCount }) {
  const [newMode, _] = mode.split(" ");

  return (
    <section className={styles["dot-container"]}>
      {(newMode === "signup" || dotCount === 4) && (
        <span
          className={
            styles["dot"] +
            " " +
            (mode === "wellcome" ? styles["active-dot"] : styles[""])
          }
        ></span>
      )}
      <span
        className={
          styles["dot"] +
          " " +
          ((mode === "wellcome" && dotCount === 3) || mode === "signup 3"
            ? styles["active-dot"]
            : styles[""])
        }
      ></span>
      <span
        className={
          styles["dot"] +
          " " +
          (mode === "login 2" || mode === "signup 2"
            ? styles["active-dot"]
            : styles[""])
        }
      ></span>
      <span
        className={
          styles["dot"] +
          " " +
          (mode === "login 1" || mode === "signup 1"
            ? styles["active-dot"]
            : styles[""])
        }
      ></span>
    </section>
  );
}
