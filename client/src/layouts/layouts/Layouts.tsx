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
      <main
        style={{ minHeight: "90vh" }}
        className=" max-w-full flex flex-col justify-center "
      >
        <Outlet />
      </main>
      <footer>
        <FooterLayouts />
      </footer>
    </>
  );
};
