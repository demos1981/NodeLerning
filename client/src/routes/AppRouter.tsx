import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ABOUT_ROUTE,
  ACCESSORIES_ROUTE,
  ADMIN_LOGIN_ROUTE,
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
  ADMIN_DASHBOARD_ROUTE,
  USERS_LIST_ROUTE,
} from "utils/consts";
// import { useAppSelector } from "hook/hooks";
// import { RootState } from "app/store/store";
import {
  HomePage,
  AboutPage,
  ContactPage,
  DeliveryPage,
  PaymentsPage,
  AdminPage,
  LoginPage,
  RegistrPage,
  ProductsListPage,
  MansProductPage,
  WomansProductPage,
  ChildrensProductPage,
  ArrivalProductPage,
  AccessoriesProductPage,
  BagsProductPage,
  UsersListPage,
} from "pages";

import { Layouts } from "layouts";
import { AddProduct, RequireAdmin, AdminAuth } from "components";

const AppRouter: React.FC = () => {
  // const isAuthenticated = useAppSelector(
  //   (state: RootState) => !!state.auth.token
  // );
  // const isAuth = false;
  return (
    //  <Router>
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
      <Route
        path={ADMIN_DASHBOARD_ROUTE}
        element={
          <RequireAdmin>
            <AdminPage />
          </RequireAdmin>
        }
      />
      <Route path={ADMIN_LOGIN_ROUTE} element={<AdminAuth />} />
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={REGISTRATION_ROUTE} element={<RegistrPage />} />
      <Route path={USERS_LIST_ROUTE} element={<UsersListPage />} />

      <Route path={PRODUCT_LIST_ROUTE} element={<ProductsListPage />} />
      <Route path={PRODUCT_ADD} element={<AddProduct />} />
    </Routes>
    //  </Router>
  );
};
export default AppRouter;
