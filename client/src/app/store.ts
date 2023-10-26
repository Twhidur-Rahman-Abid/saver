import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import taskReducer from "../features/task/taskSlice";
import filterReducer from "../features/filter/filterSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    task: taskReducer,
    filter: filterReducer,
    auth: authReducer,
  },

  devTools: import.meta.env.MODE !== `production`,

  middleware: (getDeafultMiddelware) =>
    getDeafultMiddelware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, auths: authsState}
export type AppDispatch = typeof store.dispatch;

export default store;
