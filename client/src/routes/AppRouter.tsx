import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  HOME_ROUTE,
  PAYMENTS_ROUTE,
} from "../utils/consts";
import { useAppSelector } from "../hook/hooks";
import { RootState } from "../store/store";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Layouts from "../layouts/Layouts";
import ContactPage from "../pages/ContactPage";
import DeliveryPage from "../pages/DeliveryPage";
import PaymentsPage from "../pages/PaymentsPage";

const AppRouter: React.FC = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => !!state.auth.token
  );
  const isAuth = false;
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route path={ABOUT_ROUTE} element={<AboutPage />} />
        <Route path={CONTACTS_ROUTE} element={<ContactPage />} />
        <Route path={DELIVERY_ROUTE} element={<DeliveryPage />} />
        <Route path={PAYMENTS_ROUTE} element={<PaymentsPage />} />
      </Route>
    </Routes>
    // </Router>
  );
};
export default AppRouter;
