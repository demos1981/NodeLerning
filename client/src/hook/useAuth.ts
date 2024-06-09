import { useAppSelector } from "../hook/hooks";
import { RootState } from "../store/store";

export const AuthStatus = () => {
  const { id, email, token } = useAppSelector((state: RootState) => state.auth);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
