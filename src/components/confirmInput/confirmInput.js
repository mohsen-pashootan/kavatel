import React, { useState, useRef } from "react";
import "./confirmInput.scss";

const InputCode = ({ length, onComplete, errors, validate }) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);
  // Typescript
  // useRef<(HTMLInputElement | null)[]>([])

  const processInput = (e, slot) => {
    console.log(slot);
    const num = e.target.value;
    validate(e);
    if (/[^0-9]/.test(num)) {
      // console.log("NAN");
      return;
    }
    // console.log("number");
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };
  const onKeyDown = (e, slot) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  const onKeyUp = (e, slot) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      onComplete("");
      inputs.current[slot - 1].focus();
    }
  };
  return (
    <div>
      <div className="code-inputs">
        {code.map((num, idx) => {
          return (
            <input
              className={`${errors && "error"}`}
              key={idx}
              id={idx}
              type="text"
              name="confirmCode"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              onKeyDown={(e) => onKeyDown(e, idx)}
              ref={(ref) => inputs.current.push(ref)}
            />
          );
        })}
      </div>
      {errors && <div className="alert-input">{errors}</div>}
    </div>
  );
};

export default InputCode;
