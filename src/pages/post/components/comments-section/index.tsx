import { useGetCommentsByPostIdQuery } from "../../../../services/posts";

export default function CommentsSection({ id }: { id: number }) {
  const { data } = useGetCommentsByPostIdQuery(id);

  return (
    data && (
      <section className="comments__container">
        <h3>Comments</h3>
        <ul className="comments__list">
          {data.map((comment) => (
            <li key={comment.id} className="comment__item">
              <h4 className="comment__title">{comment.email}</h4>
              <p className="comment__body">{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  );
}
