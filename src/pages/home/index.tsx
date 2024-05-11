import {
  useDeletePostMutation,
  useEditPostMutation,
  useGetAllPostsQuery,
} from "../../services/posts";

export default function HomePage() {
  const { data, error, isLoading } = useGetAllPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const [editPost] = useEditPostMutation();

  const handleDeletePost = async (id: number) => {
    await deletePost(id);
  };

  const handleEditPost = async (post) => {
    await editPost({
      ...post,
      title: "Edited Title",
    });
  };

  return (
    <>
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <button
              onClick={() => {
                handleDeletePost(post.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleEditPost(post);
              }}
            >
              Edit
            </button>
          </div>
        ))}
    </>
  );
}
