import React , {useState} from "react";
import Authentication from "../../hoc/authentication/Authentication";



function LogIn (){
    return (
      <Authentication type="login" />
    );
}

export default LogIn;