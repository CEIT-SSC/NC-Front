import axios from "axios";
import apiAddresses from "./info";

async function login(info) {
  return await axios.post(
    apiAddresses + "/user/login",
    {
      username: "" + info.username,
      password: "" + info.password,
      student_number: "" + info.student_number,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

async function register(info) {
  const sentInfo = {
    username: "" + info.username,
    password: "" + info.password,
    student_number: "" + info.student_number,
  };
  console.log(sentInfo);
  return await axios.post(apiAddresses + "/user/register", sentInfo, {
    headers: {
      "Content-Type": "application/json",
    },
  });
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
