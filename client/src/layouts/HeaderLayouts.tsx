import React from "react";
import Header from "../components/Header";
import { CategoryMenu } from "../components/CategoryMenu";
import { menuCategories } from "../data/menuCategoriesData";

const HeaderLayouts: React.FC = () => {
  return (
    <>
      <Header />

      <CategoryMenu categories={menuCategories} />
    </>
  );
};

export default HeaderLayouts;
