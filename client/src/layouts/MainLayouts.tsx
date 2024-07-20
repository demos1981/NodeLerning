import React from "react";
import Banner from "../components/Banner";
import NewProductBlock from "../components/NewProductBlock";
import NewCategoryBlock from "../components/NewCategoryBlock";

const MainLayouts: React.FC = () => {
  return (
    <div className="">
      <Banner />

      <NewProductBlock />

      <NewCategoryBlock />
    </div>
  );
};

export default MainLayouts;
