export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export type Routes = {
  path: string;
  Component: React.FC;
};

export interface AuthUser {
  id: number | undefined;
  email: string;
  token: string;
}

export interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export interface RegistrationUser {
  title: string;
  handleClick: (formData: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => void;
}

export interface AuthState {
  token: string | null;
  role: string | null;
  message: string | null;
  loading: boolean;
}

export interface ProductProps {
  id: number;
  name: string;
  color: string;
}

export interface ProductState {
  products: ProductProps[];
  loading: boolean;
  error: string | null;
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
