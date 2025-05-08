export interface AuthUser {
  id?: number | undefined;
  email: string;
  token: string;
}
export interface AuthState {
  token: string | null;
  role: string | null;
  message: string | null;
  loading: boolean;
}
