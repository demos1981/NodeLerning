import React from "react";
import Header from "../components/Header";
import { CategoryMenu } from "../components/CategoryMenu";
import { categories } from "../data/home";

const HeaderLayouts: React.FC = () => {
  return (
    <>
      <Header />

      <CategoryMenu categories={categories} />
    </>
  );
};

export default HeaderLayouts;
