import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { login, logout } from "../store/slices/authSlice";

const AuthStatus: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        {isAuthenticated
          ? "User is authenticated"
          : "User is not authenticated"}
      </h1>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default AuthStatus;
