import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../store/features/userSlice";

import classes from "./authentication.module.css";

function Authentication(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const [enterndStudent_number, setEnterndStudent_number] = useState("");

  const [enteredSecpass, setEnteredSecpass] = useState("");
  const [enteredSecpassIsValid, setEnteredSecpassIsValid] = useState(true);

  const [passwordmatch, setIspasswordmatch] = useState("true");

  const dispatch = useDispatch();

  const usernameChangehandler = (event) => {
    setEnteredName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const secondpassChangeHandler = (event) => {
    setEnteredSecpass(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    console.log("hello");

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    } else {
      setEnteredNameIsValid(true);
    }

    if (enteredPassword.trim() === "") {
      setEnteredPasswordIsValid(false);
    } else {
      setEnteredPasswordIsValid(true);
    }

    if (props.type === "signUp") {
      if (enteredSecpass.trim() === "") {
        setEnteredSecpassIsValid(false);
      } else {
        setEnteredSecpassIsValid(true);
      }

      if (
        enteredPassword.trim() !== "" &&
        enteredSecpass.trim() !== "" &&
        enteredPassword !== enteredSecpass
      ) {
        setIspasswordmatch(false);
      } else {
        setIspasswordmatch(true);
      }
    }
  };

  const buttonText = props.type === "signUp" ? "ثبت نام" : "ورود";
  let buttonAction = loginUser;
  if (props.type === "signUp") {
    buttonAction = registerUser;
  }

  return (
    <div className={`${classes.AuthPage}`}>
      <div className={`${classes.AuthForm} form-group`}>
        <form onSubmit={submithandler}>
          <label>نام کاربری</label>
          <input
            type="text"
            className="form-control"
            onChange={usernameChangehandler}
          />
          {!enteredNameIsValid && (
            <p className="text-danger">نام کاربری نباید خالی باشد</p>
          )}

          <label>شماره دانشجویی</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setEnterndStudent_number(event.target.value)}
          />

          <label> رمز عبور</label>
          <input
            type="password"
            className="form-control"
            onChange={passwordChangeHandler}
          />
          {!enteredPasswordIsValid && (
            <p className="text-danger">رمز عبور نباید خالی باشد</p>
          )}

          {props.type === "signUp" && (
            <React.Fragment>
              <label>تکرار رمز عبور</label>
              <input
                type="password"
                className="form-control"
                onChange={secondpassChangeHandler}
              />
            </React.Fragment>
          )}
          {!enteredSecpassIsValid && props.type === "signUp" && (
            <p className="text-danger">این فیلد نباید خالی باشد</p>
          )}

          {!passwordmatch && props.type === "signUp" && (
            <p className="text-danger">
              تکرار رمز عبور با اصل رمز عبور همخوانی ندارد
            </p>
          )}

          <div className="d-flex flex-column justify-content-center align-content-center m-4 flex-wrap ">
            <button
              onClick={() => {
                console.log("ahhhhhhhhhhhhhhhhhhh");
                dispatch(
                  buttonAction(
                    enteredName,
                    enteredPassword,
                    enterndStudent_number
                  )
                );
              }}
              className="btn btn-primary w-50"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authentication;
