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
