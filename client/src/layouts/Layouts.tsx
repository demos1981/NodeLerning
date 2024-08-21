import React from "react";
import HeaderLayouts from "./HeaderLayouts";
import FooterLayouts from "./FooterLayouts";
import { Outlet } from "react-router-dom";

const Layouts: React.FC = () => {
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

export default Layouts;
