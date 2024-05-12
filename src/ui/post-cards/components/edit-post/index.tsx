import "./index.css";
import { useEditPostMutation } from "../../../../services/posts";
import { PostType } from "../../../../types/posts/post-type";
import Button from "../../../button";
import Input from "../../../input";
import TextArea from "../../../text-area";

interface EditPostProps {
  post: PostType;
  onSubmit: () => void;
}

export default function EditPost({ post, onSubmit }: EditPostProps) {
  const [editPost] = useEditPostMutation();

  const handleEditPost = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget as HTMLFormElement);
    const title = form.get("title") as string;
    const body = form.get("body") as string;
    await editPost({ id: post.id, title, body, userId: post.userId });
    onSubmit();
  };

  return (
    <form className="edit-form__container" onSubmit={handleEditPost}>
      <div className="edit-form__field">
        <label>Title</label>
        <Input name="title" value={post.title} />
      </div>
      <div className="edit-form__field">
        <label>Body</label>
        <TextArea name="body" value={post.body} />
      </div>
      <Button
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        Save
      </Button>
    </form>
  );
}
