import React from "react";
import "./input.scss";

export const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input-wrapper">
      <div className="input-container">
        <div className={`material-textfield ${props.errors && "error"}`}>
          <input
            placeholder=" "
            type={props.type}
            className={`fancy-input ${props.errors && "error"}`}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
          <label className={`${props.errors && "error"}`}>
            {/* خطا */}
            {props.errors ? "خطا" : props.label}
          </label>
        </div>
      </div>
      {props.errors && <div className="alert-input">{props.errors}</div>}
    </div>
  );
});
