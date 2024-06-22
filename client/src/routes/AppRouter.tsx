import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
    <Switch>
      {isAuthenticated &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
