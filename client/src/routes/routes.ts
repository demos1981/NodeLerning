import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import BasketPage from "../pages/BasketPage";
import HomePage from "../pages/HomePage";
import { Routes } from "../types/data";
import ProductPage from "../pages/ProductPage";
import RegistrPage from "../pages/RegistrPage";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  PRODUCT_LIST_ROUTE,
  PRODUCT_ADD,
} from "../utils/consts";

export const authRoutes: Routes[] = [
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
    Component: AuthPage,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: ProductPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: RegistrPage,
  },
  {
    path: PRODUCT_LIST_ROUTE,
    Component: ProductList,
  },
  {
    path: PRODUCT_ADD,
    Component: AddProduct,
  },
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
];
