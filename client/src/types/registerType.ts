export interface RegistrationUser {
  title: string;
  handleClick: (formData: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => void;
}
