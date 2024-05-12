import "./index.css";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../services/posts";
import Layout from "../../ui/layout";
import UserInfo from "./components/user-info";
import CommentsSection from "./components/comments-section";

export default function PostPage() {
  const params = useParams();
  const id = params?.id;
  const { data, isLoading } = useGetPostByIdQuery(Number(id));

  if (!id || isNaN(Number(id)) || !data) {
    return <>Invalid ID, please choose another post to see more information</>;
  }
  return (
    <Layout>
      {!isLoading && (
        <article className="post__container">
          <h2 className="post__title">{data.title}</h2>
          <p>{data.body}</p>
          <UserInfo id={data.userId} />
          <CommentsSection id={data.id} />
        </article>
      )}
    </Layout>
  );
}
