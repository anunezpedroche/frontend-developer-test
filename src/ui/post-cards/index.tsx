import "./index.css";
import { PostType } from "../../types/posts/post-type";
import { Link } from "react-router-dom";
import { useDeletePostMutation } from "../../services/posts";
import Button from "../button";
import { useGetUserByIdQuery } from "../../services/users";
import Modal from "../modal";
import { useState } from "react";

interface PostCardProps {
  post: PostType;
}

export default function PostCard({ post }: PostCardProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [deletePost] = useDeletePostMutation();

  const { data } = useGetUserByIdQuery(post.userId);

  const handleDeletePost = async (id: number) => {
    await deletePost(id);
  };

  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <Link to={`/post/${post.id}`} className="post-card">
      {showEditModal && (
        <Modal onClose={handleShowEditModal} title="Edit post">
          Prueba modal
        </Modal>
      )}
      <article className="post-card__container">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="post-card__body">{post.body}</p>
        <p className="post-card__subtitle">
          Written by {data && data.name} ({post.userId})
        </p>
        <div className="post-card__buttons">
          <Button
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              handleShowEditModal();
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
