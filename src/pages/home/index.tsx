import { useGetAllPostsQuery } from "../../services/posts";

export default function HomePage() {
  const { data, error, isLoading } = useGetAllPostsQuery();
  return <>{JSON.stringify(data)}</>;
}
