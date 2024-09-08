import React from "react";
import Header from "../components/Header";
import { CategoryMenu } from "../components/CategoryMenu";
import { Menucategories } from "../data/menuCategoriesData";

const HeaderLayouts: React.FC = () => {
  return (
    <>
      <Header />

      <CategoryMenu categories={Menucategories} />
    </>
  );
};

export default HeaderLayouts;
