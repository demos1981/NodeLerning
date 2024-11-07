import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ABOUT_ROUTE,
  ACCESSORIES_ROUTE,
  ADMIN_ROUTE,
  ARRIVAL_ROUTE,
  BAGS_ROUTE,
  CHILDRENS_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  LOGIN_ROUTE,
  MENS_ROUTE,
  PAYMENTS_ROUTE,
  PRODUCT_ADD,
  PRODUCT_LIST_ROUTE,
  REGISTRATION_ROUTE,
  WOMENS_ROUTE,
} from "../utils/consts";
import { useAppSelector } from "hook/hooks";
import { RootState } from "app/store/store";
import { HomePage } from "pages";
import { AboutPage } from "pages";
import Layouts from "layouts/Layouts";
import { ContactPage } from "pages";
import { DeliveryPage } from "pages";
import { PaymentsPage } from "pages";
import { AdminPage } from "pages";
import { AuthPage } from "pages";
import { RegistrPage } from "pages";
import { ProductsListPage } from "pages";
import { AddProduct } from "components";
import { MansProductPage } from "pages";
import { WomansProductPage } from "pages";
import { ChildrensProductPage } from "pages";
import { ArrivalProductPage } from "pages";
import { AccessoriesProductPage } from "pages";
import { BagsProductPage } from "pages";

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
        <Route path={MENS_ROUTE} element={<MansProductPage />} />
        <Route path={WOMENS_ROUTE} element={<WomansProductPage />} />
        <Route path={CHILDRENS_ROUTE} element={<ChildrensProductPage />} />
        <Route path={ARRIVAL_ROUTE} element={<ArrivalProductPage />} />
        <Route path={ACCESSORIES_ROUTE} element={<AccessoriesProductPage />} />
        <Route path={BAGS_ROUTE} element={<BagsProductPage />} />
      </Route>
      <Route path={ADMIN_ROUTE} element={<AdminPage />} />
      <Route path={LOGIN_ROUTE} element={<AuthPage />} />
      <Route path={REGISTRATION_ROUTE} element={<RegistrPage />} />
      <Route path={LOGIN_ROUTE} element={<AuthPage />} />
      <Route path={PRODUCT_LIST_ROUTE} element={<ProductsListPage />} />
      <Route path={PRODUCT_ADD} element={<AddProduct />} />
    </Routes>
    // </Router>
  );
};
export default AppRouter;
