import React from "react";
import classes from "./Button.module.css";

function Button (){
    return <button className={`${classes.button} w-50`} >
        بزن بریم!
    </button>;

}

export default Button;