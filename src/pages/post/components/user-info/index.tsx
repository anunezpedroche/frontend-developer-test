import { useGetUserByIdQuery } from "../../../../services/users";

export default function UserInfo({ id }: { id: number }) {
  const { data, isLoading } = useGetUserByIdQuery(id);
  return !isLoading && data && <p>{data.name}</p>;
}
