import React ,{useState}  from "react";

import classes from "./SignUp.module.css";

 
function LogInSignUp() {

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const [enteredSecpass, setEnteredSecpass] = useState("");
  const [enteredSecpassIsValid, setEnteredSecpassIsValid] = useState(true);

  const [passwordmatch, setIspasswordmatch] = useState("true");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const passChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const secondpassChangeHandler = (event) => {
    setEnteredSecpass(event.target.value);
  };

  const formValidityCheck = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    } else {
      setEnteredNameIsValid(true);
    }

    if (enteredPassword.trim() === "") setEnteredPasswordIsValid(false);
    else {
      setEnteredPasswordIsValid(true);
    }

    if (enteredSecpass.trim() === "") setEnteredSecpassIsValid(false);
    else {
      setEnteredSecpassIsValid(true);
    }

    if (
      enteredPassword.trim() !== "" &&
      enteredSecpass.trim() !== "" &&
      enteredPassword !== enteredSecpass
    )
      setIspasswordmatch(false);
    else {
      setIspasswordmatch(true);
    }
  };







  return (
    <div className={`${classes.signupPage}`}>
      <div className={`form-group ${classes.dataForm}`}>
        <form onSubmit={formValidityCheck}>
          <label>نام کاربری</label>
          <input
            type="text"
            className="form-control"
            onChange={nameChangeHandler}
          />
          {!enteredNameIsValid && (
            <p className="text-danger">نام کاربری نباید خالی باشد</p>
          )}
          <label> رمز عبور</label>
          <input
            type="password"
            className="form-control"
            onChange={passChangeHandler}
          />
          {!enteredPasswordIsValid && (
            <p className="text-danger">رمز عبور نباید خالی باشد</p>
          )}
          <label>تکرار رمز عبور</label>
          <input
            type="password"
            className="form-control"
            onChange={secondpassChangeHandler}
          />
          {!enteredSecpassIsValid && (
            <p className="text-danger">این فیلد نباید خالی باشد</p>
          )}

          {!passwordmatch && (
            <p className="text-danger">
              تکرار رمز عبور با اصل رمز عبور همخوانی ندارد
            </p>
          )}

          <div className="d-flex flex-column justify-content-center align-content-center m-4 flex-wrap ">
            <button className="btn btn-primary w-50">ثبت نام</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LogInSignUp;
