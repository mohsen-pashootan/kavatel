import React from "react";
import "./title.scss";

export default function Title({ title, onSubTitleClick, switchLogin }) {
  return (
    <article>
      <h3 className="page-title"> {title} </h3>
      <section className="page-goes-to">
        <p onClick={onSubTitleClick}> {switchLogin} </p>
      </section>
    </article>
  );
}
