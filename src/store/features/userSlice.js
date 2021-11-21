import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, logout } from "../../api/user";

const loginUser = createAsyncThunk(
  "user/loginUser",
  async (username, password, student_number) => {
    const response = await login(username, password, student_number);
    return response.data;
  }
);

const registerUser = createAsyncThunk(
  "user/registerUser",
  async (username, password, student_number) => {
    const response = await register(username, password, student_number);
    return response.data;
  }
);

const logoutUser = createAsyncThunk("user/logoutUser", async (token) => {
  const response = await logout(token);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",

  initialState: {
    username: "",
    student_number: "",
    token: "",
  },

  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setStudentNumber: (state, action) => {
      state.student_number = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },

  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.username = action.payload.username;
      state.student_number = action.payload.student_number;
      state.token = action.payload.token;
    },
    [logoutUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.username = "";
      state.student_number = "";
      state.token = "";
    },
    [registerUser.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsername, setStudentNumber, setToken } = userSlice.actions;
export { loginUser, logoutUser, registerUser };

export default userSlice.reducer;
