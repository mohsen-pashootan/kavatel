import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./messengerLogin.scss";
import Button from "../components/button";
import FancyImage from "../components/fancyImage";
import NavCircles from "../components/navCircles";
import Title from "../components/title";
import Seeder from "../constants/seeder.json";
import BottomLogo from "../components/bottomLogo";
import SingleInput from "../components/singleInput/singleInput";

export default function MessengerLogin({ mode, onModeChange, dotCount }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const dataLogin = Seeder[mode].options;
  const inputsData = Seeder[mode].input_Attributes;

  const Modes = {
    Login: mode === "login 1",
    PassEnter: mode === "login 2",
    WellCome: mode === "wellcome",
  };

  const handleSubTitleClick = () => {
    if (Modes.Login) {
      onModeChange("go to signup 1");
      history.push("/signup");
    }
    if (Modes.PassEnter) {
      console.log("forgot password");
    }
  };

  const validate = () => {
    const errors = {};

    if (Modes.Login && phoneNumber.trim() === "")
      errors.phoneNumber = "شماره تلفن همراه ضروری است";
    if (Modes.PassEnter && password.trim() === "")
      errors.password = "رمز عبور ضروری است";

    console.log();
    return Object.keys(errors).length === 0 ? {} : errors;
  };

  const validateProperty = (input) => {
    if (input.name === "phoneNumber") {
      if (input.value.trim() === "") return "شماره تلفن همراه ضروری است";
    }
    if (input.name === "password") {
      if (input.value.trim() === "") return "رمز عبور ضروری است";
    }
  };

  const handleSubmit = () => {
    const errors = validate();
    setErrors(errors || {});
    if (Object.keys(errors).length === 0) {
      onModeChange(mode);
    }
  };

  const handleSingleInput = (e) => {
    const inputValue = e.target.value;
    const input = e.currentTarget;
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];

    if (Modes.Login) {
      if (/[^0-9]/.test(inputValue)) {
        console.log("NAN");
        return;
      }
      setPhoneNumber(inputValue);
    }
    if (Modes.PassEnter) setPassword(inputValue);
    setErrors(newErrors);
  };

  return (
    <div className="chat-container">
      <FancyImage
        srcLarge={dataLogin.srcLarge}
        altLarge={dataLogin.altLarge}
        srcSmall={dataLogin.srcSmall}
        altSmall={dataLogin.altSmall}
      />

      <Title
        title={dataLogin.title}
        mode={mode}
        switchLogin={dataLogin.subTitle}
        onSubTitleClick={handleSubTitleClick}
      />
      {(Modes.Login || Modes.PassEnter) && (
        <SingleInput
          type={dataLogin.inputType}
          errors={errors[inputsData.name]}
          label={dataLogin.inputLabel}
          name={inputsData.name}
          value={Modes.Login ? phoneNumber : password}
          onComplete={handleSingleInput}
        />
      )}

      <Button text={dataLogin.buttonText} onSubmit={handleSubmit} />

      <NavCircles mode={mode} dotCount={dotCount} />
      <BottomLogo />
    </div>
  );
}
