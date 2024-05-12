import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostType } from "../../types/posts/post-type";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostType[], void>({
      query: () => "/posts",
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({
          type: "Post" as const,
          id: id,
        })),
      ],
    }),
    getPostById: builder.query<PostType, number>({
      query: (id) => `/posts/${id}`,
    }),
    editPost: builder.mutation<PostType, PostType>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      }),
      async onQueryStarted({ id, ...post }, { dispatch }) {
        dispatch(
          postsApi.util.updateQueryData("getAllPosts", undefined, (draft) => {
            const newData = draft.map((postDraft) => {
              if (postDraft.id === id) {
                postDraft = { ...postDraft, ...post };
              }
              return postDraft;
            });
            return newData;
          })
        );
      },
      //This line is commented out because we need to invalidate the cache in order to see the changes
      /*invalidatesTags: (_result, _error, post) => [
        { type: "Post", id: post.id },
      ],*/
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({ url: `/posts/${id}`, method: "DELETE" }),
      async onQueryStarted(id, { dispatch }) {
        dispatch(
          postsApi.util.updateQueryData("getAllPosts", undefined, (draft) => {
            return draft.filter((post) => post.id !== id);
          })
        );
      },
      //This line is commented out because we need to invalidate the cache in order to see the changes
      //invalidatesTags: (_result, _error, id) => [{ type: "Post", id }],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useDeletePostMutation,
  useEditPostMutation,
  useGetPostByIdQuery,
} = postsApi;
