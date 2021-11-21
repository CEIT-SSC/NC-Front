import axios from "axios";
import apiAddresses from "./info";

async function login(userName, password, student_number) {
  console.log("tsssss login api");
  return await axios.post(apiAddresses + "/user/login", {
    username: userName,
    password: password,
    student_number: student_number,
  });
}

async function register(userName, password, student_number) {
  return await axios.post(apiAddresses + "/user/register", {
    username: userName,
    password: password,
    student_number: student_number,
  });
}

async function logout(token) {
  return await axios.post(
    apiAddresses + "/user/logout",
    {},
    { authorization: "Bearer " + token }
  );
}

export { register, login, logout };
