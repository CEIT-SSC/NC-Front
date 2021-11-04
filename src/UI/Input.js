import React from "react";
import classes from './Input.module.css';

function Input(props){
    return <div className={`${classes.input} d-flex flex-column `}>
        <input placeholder={props.placeholder} ></input>
        <a href="#">راهنما</a>
    </div>;
}

export default Input;