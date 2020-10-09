import React from "react";
import "./button.scss";

export default function Button({ text, onSubmit }) {
  return (
    <button className="submit_btn" onClick={onSubmit}>
      {text}
    </button>
  );
}
