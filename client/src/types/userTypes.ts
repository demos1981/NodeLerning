export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserProps {
  id: number;
  name: "string";
  email: "string";
  role: "string";
}
export interface UserState {
  users: UserProps[];
  loading: boolean;
  error: string | null;
}
