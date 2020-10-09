import React from "react";
import "./navCircles.scss";

export default function NavCircles({ mode, dotCount }) {
  const [newMode, _] = mode.split(" ");

  return (
    <section className="dot-container">
      {(newMode === "signup" || dotCount === 4) && (
        <span
          className={`dot ${mode === "wellcome" ? "active-dot" : ""}`}
        ></span>
      )}
      <span
        className={`dot ${
          (mode === "wellcome" && dotCount === 3) || mode === "signup 3"
            ? "active-dot"
            : ""
        }`}
      ></span>
      <span
        className={`dot ${
          mode === "login 2" || mode === "signup 2" ? "active-dot" : ""
        }`}
      ></span>
      <span
        className={`dot ${
          mode === "login 1" || mode === "signup 1" ? "active-dot" : ""
        }`}
      ></span>
    </section>
  );
}
