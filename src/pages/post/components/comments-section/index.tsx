import "./index.css";
import { useGetCommentsByPostIdQuery } from "../../../../services/posts";

export default function CommentsSection({ id }: { id: number }) {
  const { data } = useGetCommentsByPostIdQuery(id);

  return (
    data && (
      <section>
        <h3 className="comments__title">Comments</h3>
        <ul className="comments__list">
          {data.map((comment) => (
            <li key={comment.id} className="comment__item">
              <p className="comment__body">{comment.body}</p>
              <p className="comment__user-info">{`Comment written by ${comment.email} | ${comment.name}`}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  );
}
