import React, { useState, useRef } from "react";
import "./confirmInput.scss";

const InputCode = ({ length, onComplete, errors,validate }) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);
  // Typescript
  // useRef<(HTMLInputElement | null)[]>([])

  // const validateProperty = (input) => {
  //   if (input.name === "confirmCode") {
  //     if (input.value.trim() === "") return "کد فعال سازی ضروری است";
  //   }
  // };

  console.log(errors);
  const processInput = (e, slot) => {
    const num = e.target.value;
    // /////////validate/////////
    // const input = e.currentTarget;
    // const newErrors = { ...errors };
    // const errorMessage = validateProperty(input);
    // if (errorMessage) newErrors[input.name] = errorMessage;
    // else delete newErrors[input.name];
    // validate(newErrors);
    // console.log(newErrors);
    // ///////

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

  const onKeyUp = (e, slot) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
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
              type="text"
              name="confirmCode"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
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
