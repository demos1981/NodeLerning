import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <NavLink to="/">Home</NavLink>
      </footer>
    </>
  );
};

export default Layout;
