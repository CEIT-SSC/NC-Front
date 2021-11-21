import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
});

export const login = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("/fakeApi/posts");
  return response.data;
});

// Action creators are generated for each case reducer function
export const { setUsername, setStudentNumber, setToken } = userSlice.actions;

export default userSlice.reducer;
