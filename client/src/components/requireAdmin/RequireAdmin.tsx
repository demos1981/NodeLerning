import React from "react";
import { Navigate } from "react-router-dom";
import { ADMIN_LOGIN_ROUTE } from "utils/consts";

export const RequireAdmin: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAdmin = localStorage.getItem("isAuth") === "true";
  console.log(isAdmin);
  if (!isAdmin) {
    return <Navigate to={ADMIN_LOGIN_ROUTE} replace />;
  }
  return <>{children}</>;
};
