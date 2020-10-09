import React from "react";
import "./loading.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading">
        <img
          src="/kavano-logo-2.svg"
          alt="kavano-logo-large"
          className="kavano-logo-large"
          //  ${fadeOut ? "fading" : ""}`}
        />
        <img
          src="kavano logo-1.svg"
          alt="kavano-logo-small"
          className="kavano-logo-small"
        />
      </div>
    </div>
  );
}
