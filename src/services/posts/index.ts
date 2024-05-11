import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostType } from "../../types/posts/post-type";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostType[], void>({ query: () => "/posts" }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
