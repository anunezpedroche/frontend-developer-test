import "./index.css";
import { PostType } from "../../types/posts/post-type";
import { Link } from "react-router-dom";
import { useDeletePostMutation } from "../../services/posts";
import Button from "../button";

interface PostCardProps {
  post: PostType;
}

export default function PostCard({ post }: PostCardProps) {
  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = async (id: number) => {
    await deletePost(id);
  };

  return (
    <Link to={`/post/${post.id}`} className="post-card">
      <article className="post-card__container">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="post-card__body">{post.body}</p>
        <p className="post-card__subtitle">Written by {post.userId}</p>
        <div className="post-card__buttons">
          <Button
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              handleDeletePost(post.id);
            }}
          >
            Edit
          </Button>
          <Button
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              handleDeletePost(post.id);
            }}
          >
            Delete
          </Button>
        </div>
      </article>
    </Link>
  );
}