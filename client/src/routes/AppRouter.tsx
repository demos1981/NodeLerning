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
import { useAppSelector } from "../hook/hooks";
import { RootState } from "../store/store";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Layouts from "../layouts/Layouts";
import ContactPage from "../pages/ContactPage";
import DeliveryPage from "../pages/DeliveryPage";
import PaymentsPage from "../pages/PaymentsPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import RegistrPage from "../pages/RegistrPage";
import ProductListPage from "../pages/ProductListPage";
import AddProduct from "../components/addProduct";
import MensProductPage from "../pages/MansProductPage";
import WomensProductPage from "../pages/WomensProductPage";
import ChildrensProductPage from "../pages/ChildrensProductPage";
import ArrivalProductPage from "../pages/ArrivalProductPage";
import AccessoriesProductPage from "../pages/AccessoriesProductPage";
import BagsProductPage from "../pages/BagsProductPage";

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
        <Route path={MENS_ROUTE} element={<MensProductPage />} />
        <Route path={WOMENS_ROUTE} element={<WomensProductPage />} />
        <Route path={CHILDRENS_ROUTE} element={<ChildrensProductPage />} />
        <Route path={ARRIVAL_ROUTE} element={<ArrivalProductPage />} />
        <Route path={ACCESSORIES_ROUTE} element={<AccessoriesProductPage />} />
        <Route path={BAGS_ROUTE} element={<BagsProductPage />} />
      </Route>
      <Route path={ADMIN_ROUTE} element={<AdminPage />} />
      <Route path={LOGIN_ROUTE} element={<AuthPage />} />
      <Route path={REGISTRATION_ROUTE} element={<RegistrPage />} />
      <Route path={LOGIN_ROUTE} element={<AuthPage />} />
      <Route path={PRODUCT_LIST_ROUTE} element={<ProductListPage />} />
      <Route path={PRODUCT_ADD} element={<AddProduct />} />
    </Routes>
    // </Router>
  );
};
export default AppRouter;
