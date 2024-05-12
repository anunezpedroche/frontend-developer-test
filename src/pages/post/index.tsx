import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../services/posts";
import Layout from "../../ui/layout";

export default function PostPage() {
  const params = useParams();
  const id = params?.id;
  const { data, isLoading } = useGetPostByIdQuery(Number(id));

  if (!id || isNaN(Number(id)) || !data) {
    return <>Invalid ID, please choose another post to see more information</>;
  }
  return <Layout>{!isLoading && data.title}</Layout>;
}
