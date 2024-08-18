import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CategoryMenu } from "../components/CategoryMenu";
import { categories } from "../data/home";
import HeaderLayouts from "./HeaderLayouts";
import FooterLayouts from "./FooterLayouts";
import MainLayouts from "./MainLayouts";

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <HeaderLayouts />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterLayouts />
      </footer>
    </>
  );
};

export default Layout;
