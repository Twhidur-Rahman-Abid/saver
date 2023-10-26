import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // create user
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "accessToken",
            JSON.stringify(result?.data?.accessToken)
          );
          localStorage.setItem("user", JSON.stringify(result?.data?.user));

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.accessToken,
              user: result?.data?.user,
            })
          );
        } catch (e) {
          // nothing
        }
      },
    }),
    // user login
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "accessToken",
            JSON.stringify(result?.data?.accessToken)
          );
          localStorage.setItem("user", JSON.stringify(result?.data?.user));

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.accessToken,
              user: result?.data?.user,
            })
          );
        } catch (e) {
          // nothing
        }
      },
    }),
    // get user
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
