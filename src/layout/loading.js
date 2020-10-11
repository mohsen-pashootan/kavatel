import React from "react";
import styles from './loading.module.scss'

export default function Loading() {
  return (
    <div className={styles["loading-container"]}
    >
      <div className={styles["loading"]}>
        <img
          src="/kavano-logo-2.svg"
          alt="kavano-logo-large"
          className={styles["kavano-logo-large"]}
          //  ${fadeOut ? "fading" : ""}`}
        />
        <img
          src="kavano logo-1.svg"
          alt="kavano-logo-small"
          className={styles["kavano-logo-small"]}
        />
      </div>
    </div>
  );
}
