import {
  useDeletePostMutation,
  useEditPostMutation,
  useGetAllPostsQuery,
} from "../../services/posts";
import Button from "../../ui/button";

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
            <Button
              onClick={() => {
                handleDeletePost(post.id);
              }}
            >
              Delete
            </Button>
            <Button
              onClick={() => {
                handleEditPost(post);
              }}
              variant="secondary"
            >
              Edit
            </Button>
          </div>
        ))}
    </>
  );
}
