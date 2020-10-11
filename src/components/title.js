import React from "react";
import styles from "./title.module.scss";

export default function Title({ title, onSubTitleClick, switchLogin }) {
  return (
    <article>
      <h3 className={styles["page-title"]}> {title} </h3>
      <section className={styles["page-goes-to"]}>
        <p onClick={onSubTitleClick}> {switchLogin} </p>
      </section>
    </article>
  );
}
