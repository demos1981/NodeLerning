import React from "react";
import { HeaderLayouts } from "layouts";
import { FooterLayouts } from "layouts";
import { Outlet } from "react-router-dom";

export const Layouts: React.FC = () => {
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
