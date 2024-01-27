import { User } from "../../../../lib/types";

export interface IDeleteUserProps {
  user: User;
  onClose: () => void;
}