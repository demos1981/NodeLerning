import { dealsOfTheMonthData } from "data";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export type RoutesLink = {
  path: string;
  element: React.FC;
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

export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

export type shopByCategoriesType = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type ourBestsellerType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type dealsOfTheMonthType = {
  id: number;
  title: string;
  description: string;
  linkTitle: string;
  image: string;
};

export type whatCustomerSaysType = {
  id: number;
  name: string;
  comment: string;
  image: string;
};
