import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../services/posts";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "../services/users";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, usersApi.middleware),
});

setupListeners(store.dispatch);
