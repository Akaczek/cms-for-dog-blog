import { User } from "../../../../lib/types";

export interface IEditUserRoleProps {
  user: User;
  onClose: () => void;
}