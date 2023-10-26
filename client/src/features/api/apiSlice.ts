import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedOut } from "../auth/authSlice";

const url =
  import.meta.env.MODE === "development"
    ? "http://localhost:9000"
    : "https://advance-todo-server-n9jn.onrender.com";

// base query
const baseQuery = fetchBaseQuery({
  baseUrl: url,
  timeout: 5000,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${JSON.parse(token)}`);
    }

    return headers;
  },
});

// api slice
const apiSlice = createApi({
  reducerPath: "apiSlice",
  keepUnusedDataFor: 1000 * 60,
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut());
      localStorage.clear();
    }
    return result;
  },

  tagTypes: ["tasks"],
  endpoints: () => ({}),
});

export default apiSlice;
