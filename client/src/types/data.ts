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
  isLoggedIn: boolean;
  message: string;
  loading: boolean;
}
