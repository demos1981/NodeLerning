import React from "react";
import { Header } from "components";
import { CategoryMenu } from "components";
import { menuCategories } from "data/menuCategoriesData";

const HeaderLayouts: React.FC = () => {
  return (
    <>
      <Header />

      <CategoryMenu categories={menuCategories} />
    </>
  );
};

export default HeaderLayouts;
