import React, { useState } from "react";
import "./messengerSignUp.scss";
import Button from "../components/button";
import FancyImage from "../components/fancyImage";
import { Input } from "../components/input";
import NavCircles from "../components/navCircles";
import Title from "../components/title";
import Seeder from "../constants/seeder.json";
import BottomLogo from "../components/bottomLogo";
import CountDownTimer from "../components/countDownTimer";
import InputCode from "./../components/confirmInput/confirmInput";
import { useHistory } from "react-router-dom";

export default function MessengerSignUp({ mode, onModeChange, dotCount }) {
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [confirmCode, setConfirmCode] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const dataLogin = Seeder[mode].options;
  const inputsData = Seeder[mode].input_Attributes;

  const Modes = {
    SignUp: mode === "signup 1",
    GetConfirmCode: mode === "signup 2",
    PersonalInfo: mode === "signup 3",
    WellCome: mode === "wellcome",
  };

  const validate = () => {
    const errors = {};

    if (Modes.SignUp && phoneNumber.trim() === "")
      errors.phoneNumber = "شماره تلفن همراه ضروری است";

    if (
      Modes.PersonalInfo &&
      (username.trim() === "" || email.trim() === "" || password.trim() === "")
    ) {
      errors.username = "نام و نام خانوادگی ضروری است";
      errors.email = "ایمیل ضروری است";
      errors.password = "رمز عبور ضروری است";
    }
    console.log();
    return Object.keys(errors).length === 0 ? {} : errors;
  };

  const handleSubTitleClick = () => {
    onModeChange("go to login 1");
    history.push("/login");
  };

  const handleLogin = () => {
    const errors = validate();
    setErrors(errors || {});
    if (Object.keys(errors).length === 0) {
      onModeChange(mode);
    }
  };

  const handleSingleInput = (e) => {
    const inputValue = e.target.value;
    if (Modes.SignUp) setPhoneNumber(inputValue);
    if (Modes.PersonalInfo) {
      if (e.target.name === "username") setUsername(inputValue);
      if (e.target.name === "email") setEmail(inputValue);
      if (e.target.name === "password") setPassword(inputValue);
    }
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
      {Modes.SignUp && (
        <Input
          type={dataLogin.inputType}
          label={dataLogin.inputLabel}
          placeholder={dataLogin.placeholder}
          name={inputsData.name}
          errors={errors[inputsData.name]}
          onChange={handleSingleInput}
          value={phoneNumber}
        />
      )}
      {Modes.GetConfirmCode && (
        <React.Fragment>
          <InputCode
            length={5}
            onComplete={(code) => {
              setConfirmCode(code);
            }}
          />
          <section className="count-down-container">
            <p> زمان باقی مانده برای ورود کد </p>
            <CountDownTimer min={2} />
          </section>
        </React.Fragment>
      )}
      {Modes.PersonalInfo && (
        <React.Fragment>
          <Input
            type={dataLogin.inputTypeName}
            label={dataLogin.inputLabelName}
            placeholder={dataLogin.placeholderName}
            value={username}
            name={inputsData.name_username}
            errors={errors[inputsData.name_username]}
            onChange={handleSingleInput}
          />
          <Input
            type={dataLogin.inputTypeEmail}
            label={dataLogin.inputLabeEmail}
            placeholder={dataLogin.placeholderEmail}
            value={email}
            name={inputsData.name_email}
            errors={errors[inputsData.name_email]}
            onChange={handleSingleInput}
          />
          <Input
            type={dataLogin.inputTypePassword}
            label={dataLogin.inputLabelPassword}
            placeholder={dataLogin.placeholderPassword}
            value={password}
            name={inputsData.name_password}
            errors={errors[inputsData.name_password]}
            onChange={handleSingleInput}
          />
        </React.Fragment>
      )}

      <Button text={dataLogin.buttonText} onSubmit={handleLogin} />

      <NavCircles mode={mode} dotCount={dotCount} />
      <BottomLogo />
    </div>
  );
}
