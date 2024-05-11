import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserType } from "../../types/users/user-type";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UserType[], void>({ query: () => "/users" }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
