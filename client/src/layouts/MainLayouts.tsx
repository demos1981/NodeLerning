import React from "react";
import Banner from "../components/Banner";
import NewProductBlock from "../components/NewProductBlock";
import NewCategoryBlock from "../components/NewCategoryBlock";

const MainLayouts: React.FC = () => {
  return (
    <div className="">
      <Banner />
      <p className="flex ml-4 mt-6">New product</p>
      <NewProductBlock />

      <NewCategoryBlock />
    </div>
  );
};

export default MainLayouts;
