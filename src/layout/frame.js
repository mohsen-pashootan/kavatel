import React from "react";
import "./frame.scss";

export default function Frame({ children }) {
  return (
    <div className="app-wrapper">
      <div className="app-container">{children}</div>
    </div>
  );
}
