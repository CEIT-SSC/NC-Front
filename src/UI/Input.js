import React from "react";
import classes from './Input.module.css';

function Input(props){
    return <div className={`${classes.input} d-flex flex-column align-items-end `}>
        {/* <fieldset> */}
         <span >{props.title}</span>
        <input placeholder={props.placeholder} ></input>
        {/* </fiel/dset> */}
        <a href="#">راهنما</a>
    </div>;
}

export default Input;