import { User } from "../../../../lib/types";

export interface IUsersListProps {
  user: User;
  onUserDelete: (user: User) => void;
  onUserEdit: (user: User) => void;
}