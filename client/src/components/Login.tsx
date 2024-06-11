import React from "react";
import Form from "./Form";
import { useAppDispatch } from "../hook/hooks";
import authSlice, { setUser } from "../store/slices/authSlice";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  return <div className="flex items-center justify-center "></div>;
};

export default Login;
