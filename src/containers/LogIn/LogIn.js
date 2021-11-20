import React , {useState} from "react";

import classes from "./LogIn.module.css";

function LogIn (){

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);
  

    const usernameChangehandler = event =>{
        setEnteredName(event.target.value);
    }
    const passwordChangeHandler = event=>{
        setEnteredPassword(event.target.value);
    }

    const submithandler = event =>{
        event.preventDefault();

        if(enteredName.trim() === '')
        {
            setEnteredNameIsValid(false);
        }
        else{
            setEnteredNameIsValid(true);
        }
        

        if(enteredPassword.trim() === '')
        {
            setEnteredPasswordIsValid(false);
        }
        else
        {
             setEnteredPasswordIsValid(true);
        }
       
    }


    return (
      <div className={`${classes.loginPage}`}>
        <div className={`${classes.loginForm} form-group`}>
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

            <label> رمز عبور</label>
            <input
              type="password"
              className="form-control"
              onChange={passwordChangeHandler}
            />
            {!enteredPasswordIsValid && (
              <p className="text-danger">رمز عبور نباید خالی باشد</p>
            )}

            <div className="d-flex flex-column justify-content-center align-content-center m-4 flex-wrap ">
              <button className="btn btn-primary w-50">ثبت نام</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default LogIn;