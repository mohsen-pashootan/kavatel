import React from "react";
import styles from "./singleInput.module.scss";

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
    <div className={styles["input-wrapper"]}>
      <div className={styles["input-container"]}>
        <div
          className={
            styles["material-textfield"] + " " + (errors && styles["error"])
          }
        >
          <input
            placeholder=" "
            type={type}
            inputMode={inputMode}
            className={
              styles["fancy-input"] + " " + (errors && styles["error"])
            }
            name={name}
            value={value}
            onChange={(e) => onComplete(e)}
          />
          <label className={errors && styles["error"]}>
            {errors ? "خطا" : label}
          </label>
        </div>
      </div>
      {errors && <div className={styles["alert-input"]}>{errors}</div>}
    </div>
  );
}
