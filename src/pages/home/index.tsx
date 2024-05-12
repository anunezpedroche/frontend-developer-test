import "./index.css";
import { useGetAllPostsQuery } from "../../services/posts";
import Layout from "../../ui/layout";
import PostCard from "../../ui/post-cards";

export default function HomePage() {
  const { data } = useGetAllPostsQuery();
  return (
    <Layout>
      <section className="home-section">
        {data && data.map((post) => <PostCard key={post.id} post={post} />)}
      </section>
    </Layout>
  );
}
