import React from "react";
import "./inputConfirm.scss";

export const InputConfirm = React.forwardRef((props, ref) => {

  
  return (
    <div>
      <input
        type={props.type}
        className="fancy-confirm-input"
        ref={ref}
        value={props.value}
        onChange={props.onChange}
      />
      <input
        type={props.type}
        className="fancy-confirm-input"
        ref={ref}
        value={props.value}
        onChange={props.onChange}
      />
      <input
        type={props.type}
        className="fancy-confirm-input"
        ref={ref}
        value={props.value}
        onChange={props.onChange}
      />
      <input
        type={props.type}
        className="fancy-confirm-input"
        ref={ref}
        value={props.value}
        onChange={props.onChange}
      />
      <input
        type={props.type}
        className="fancy-confirm-input"
        ref={ref}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <div className="alert-input">{props.error}</div>}
    </div>
  );
});
