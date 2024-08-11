import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { HOME_ROUTE } from "../utils/consts";
import { useAppSelector } from "../hook/hooks";
import { RootState } from "../store/store";

const AppRouter: React.FC = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => !!state.auth.token
  );
  // const isAuth = false;
  return (
    <Routes>
      {isAuthenticated &&
        authRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
