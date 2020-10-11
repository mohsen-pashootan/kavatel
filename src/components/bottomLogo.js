import React from "react";
import styles from "./bottomLogo.module.scss";

export default function BottomLogo() {
  return (
    <img src="/kavano-logo.svg" alt="kavano logo" className={styles["logo-bottom"]} />
  );
}
