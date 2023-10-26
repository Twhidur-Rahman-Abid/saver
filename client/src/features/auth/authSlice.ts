import { createSlice } from "@reduxjs/toolkit";

interface State {
  accessToken: undefined | string;
  user:
    | undefined
    | {
        id: number;
        name: string;
        email: string;
        password: string | number;
      };
}

const initialState: State = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut(state) {
      (state.accessToken = undefined), (state.user = undefined);
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
