import React, { useState } from "react";
import "./messengerSignUp.scss";
import Button from "../components/button";
import FancyImage from "../components/fancyImage";
import NavCircles from "../components/navCircles";
import Title from "../components/title";
import Seeder from "../constants/seeder.json";
import BottomLogo from "../components/bottomLogo";
import CountDownTimer from "../components/countDownTimer";
import InputCode from "./../components/confirmInput/confirmInput";
import { useHistory } from "react-router-dom";
import SingleInput from "../components/singleInput/singleInput";

export default function MessengerSignUp({ mode, onModeChange, dotCount }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const dataLogin = Seeder[mode].options;

  const Modes = {
    SignUp: mode === "signup 1",
    GetConfirmCode: mode === "signup 2",
    PersonalInfo: mode === "signup 3",
    WellCome: mode === "wellcome",
  };

  const handleSubTitleClick = () => {
    if (Modes.SignUp) {
      onModeChange("go to login 1");
      history.push("/login");
    }
    if (Modes.GetConfirmCode) {
      console.log("request new code");
    }
  };

  const validate = () => {
    const errors = {};

    if (Modes.SignUp && phoneNumber.trim() === "")
      errors.phoneNumber = "شماره تلفن همراه ضروری است";

    if (Modes.GetConfirmCode && confirmCode.trim() === "")
      errors.confirmCode = "کد فعال سازی ضروری است";

    if (Modes.PersonalInfo) {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (username.trim() === "")
        errors.username = "نام و نام خانوادگی ضروری است";

      if (email.trim() === "") errors.email = "ایمیل ضروری است";
      else if (!pattern.test(email))
        errors.email = "لطفا ایمیل معتبری وارد نمایید";

      if (password.trim() === "") errors.password = "رمز عبور ضروری است";
    }

    return Object.keys(errors).length === 0 ? {} : errors;
  };

  const validateProperty = (input) => {
    if (input.name === "phoneNumber") {
      if (input.value.trim() === "") return "شماره تلفن همراه ضروری است";
    }
    if (input.id === "0") {
      console.log(input.value.trim() === "");
      if (input.value.trim() === "") return "کد فعال سازی ضروری است";
    }
    if (input.name === "password") {
      if (input.value.trim() === "") return "رمز عبور ضروری است";
    }
    if (input.name === "email") {
      if (input.value.trim() === "") return "ایمیل ضروری است";
    }
    if (input.name === "username") {
      if (input.value.trim() === "") return " نام و نام خانوداگی ضروری است";
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
    // console.log(input);
    // console.log(errorMessage);

    if (Modes.SignUp) {
      if (/[^0-9]/.test(inputValue)) {
        console.log("NAN");
        return;
      }
      setPhoneNumber(inputValue);
      setErrors(newErrors);
    }
    if (Modes.GetConfirmCode) {
      setErrors(newErrors);
    }
    if (Modes.PersonalInfo) {
      if (e.target.name === "username") {
        setErrors(newErrors);
        setUsername(inputValue);
      }
      if (e.target.name === "email") {
        setErrors(newErrors);
        setEmail(inputValue);
      }
      if (e.target.name === "password") {
        setErrors(newErrors);
        setPassword(inputValue);
      }
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
        <SingleInput
          type={dataLogin.inputType}
          inputMode="numeric"
          label={dataLogin.inputLabel}
          name={dataLogin.input_name}
          errors={errors[dataLogin.input_name]}
          value={phoneNumber}
          onComplete={handleSingleInput}
        />
      )}
      {Modes.GetConfirmCode && (
        <React.Fragment>
          <InputCode
            length={5}
            validate={(e) => handleSingleInput(e)}
            errors={errors[dataLogin.input_name]}
            onComplete={(code) => {
              setConfirmCode(code);
            }}
          />
          <section className="count-down-container">
            <p> زمان باقی مانده برای ورود کد </p>
            <CountDownTimer startMin={2} />
          </section>
        </React.Fragment>
      )}
      {Modes.PersonalInfo && (
        <React.Fragment>
          <SingleInput
            type={dataLogin.inputTypeName}
            inputMode="text"
            label={dataLogin.inputLabelName}
            name={dataLogin.input_name_username}
            errors={errors[dataLogin.input_name_username]}
            value={username}
            onComplete={handleSingleInput}
          />
          <SingleInput
            type={dataLogin.inputTypeEmail}
            inputMode="email"
            label={dataLogin.inputLabeEmail}
            value={email}
            name={dataLogin.input_name_email}
            errors={errors[dataLogin.input_name_email]}
            onComplete={handleSingleInput}
          />
          <SingleInput
            type={dataLogin.inputTypePassword}
            inputMode="text"
            label={dataLogin.inputLabelPassword}
            value={password}
            name={dataLogin.input_name_password}
            errors={errors[dataLogin.input_name_password]}
            onComplete={handleSingleInput}
          />
        </React.Fragment>
      )}

      <Button text={dataLogin.buttonText} onSubmit={handleSubmit} />

      <NavCircles mode={mode} dotCount={dotCount} />
      <BottomLogo />
    </div>
  );
}
