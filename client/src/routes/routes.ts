import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import BasketPage from "../pages/BasketPage";
import HomePage from "../pages/HomePage";
import { Routes } from "../types/data";
import ProductPage from "../pages/ProductPage";
import RegistrPage from "../pages/RegistrPage";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import LoginPage from "../pages/LoginPage";

export const authRoutes: Routes[] = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: BASKET_ROUTE,
    Component: BasketPage,
  },
];

export const publicRoutes: Routes[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: ProductPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: RegistrPage,
  },
];
