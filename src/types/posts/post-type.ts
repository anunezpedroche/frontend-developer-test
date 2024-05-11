import { UserIdType } from "../users/user-type";

export type PostType = {
  id: UserIdType;
  userId: number;
  title: string;
  body: string;
};
