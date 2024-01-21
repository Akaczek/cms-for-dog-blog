export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  authorities: string[];
}

export default User;