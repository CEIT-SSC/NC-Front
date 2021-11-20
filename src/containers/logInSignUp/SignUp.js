import React from "react";

import classes from "./SignUp.module.css";

function LogInSignUp() {
  return (
      <div className={`${classes.signupPage}`}>
          <div class={`form-group ${classes.dataForm}` }>
    <label for="exampleFormControlInput1">نام کاربری</label>
    <input type="text" class="form-control"/>
    <label for="exampleFormControlInput1"> رمز عبور</label>
    <input type="password" class="form-control"/>
    <label for="exampleFormControlInput1">تکرار رمز عبور</label>
    <input type="password" class="form-control"/>
    <div className="d-flex flex-column justify-content-center align-content-center m-4 flex-wrap ">
    <button type="submit" className="btn btn-primary w-50">ثبت نام</button>
    </div>
  </div>
      </div>
  );
}
export default LogInSignUp;
