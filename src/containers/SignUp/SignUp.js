import React, { useState } from "react";
import Authentication from "../../hoc/authentication/Authentication";

import classes from "./SignUp.module.css";

function LogInSignUp() {
  return <Authentication type="signUp" />;
}
export default LogInSignUp;
