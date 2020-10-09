import React from "react";
import "./singleInput.scss";

export default function SingleInput({
  onComplete,
  type,
  name,
  errors,
  label,
  value,
  inputMode,
}) {
  return (
    <div className="input-wrapper">
      <div className="input-container">
        <div className={`material-textfield ${errors && "error"}`}>
          <input
            placeholder=" "
            type={type}
            inputMode={inputMode}
            className={`fancy-input ${errors && "error"}`}
            name={name}
            value={value}
            onChange={(e) => onComplete(e)}
          />
          <label className={`${errors && "error"}`}>
            {errors ? "خطا" : label}
          </label>
        </div>
      </div>
      {errors && <div className="alert-input">{errors}</div>}
    </div>
  );
}
