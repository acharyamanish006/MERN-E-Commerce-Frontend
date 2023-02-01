import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sign_in = createAsyncThunk(
  "/sign/in",
  async ({ email, password }) => {
    return fetch(process.env.React_App_Api + "/sign/in", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return data;

        // alert(data.message);

        // console.log(data.success);

        // window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }
);

const signIn = createSlice({
  name: "signIn",
  initialState: {
    user_id: "",
    auth: false,
    Loading: false,
  },
  extraReducers: {
    [sign_in.pending]: (state, action) => {
      state.auth = false;
      state.Loading = true;
    },
    [sign_in.fulfilled]: (state, action) => {
      state.user_id = action.payload.user._id;
      state.auth = action.payload.success;
      state.Loading = false;
    },
    [sign_in.rejected]: (state, action) => {
      state.auth = false;
      state.Loading = false;
    },
  },
});

export default signIn.reducer;
