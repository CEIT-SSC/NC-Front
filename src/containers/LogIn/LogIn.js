import React , {useState} from "react";
import Authentication from "../../hoc/authentication/Authentication";

import classes from "./LogIn.module.css";

function LogIn (){
    return (
      <Authentication type="login" />
    );
}

export default LogIn;