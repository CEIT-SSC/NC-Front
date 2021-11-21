import axios from "axios";
import apiAddresses from "./info";

async function login(userName, password, student_number) {
  console.log("tsssss login api");
  return await axios.post(
    apiAddresses + "/user/login",
    {
      username: userName,
      password: password,
      student_number: student_number,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

async function register(userName, password, student_number) {
  return await axios.post(
    apiAddresses + "/user/register",
    {
      username: userName,
      password: password,
      student_number: student_number,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

async function logout(token) {
  return await axios.post(
    apiAddresses + "/user/logout",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    }
  );
}

export { register, login, logout };
