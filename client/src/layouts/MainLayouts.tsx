import React from "react";
import HeroSection from "../components/heroSection";
import NewProductBlockMan from "../components/newProductBlockMan/NewProductBlockMan";
import NewCategoryBlock from "../components/newCategoryBlock/NewCategoryBlock";
import NewProductBlockWoman from "../components/newProductBlockWoman/NewProductBlockWoman";

const MainLayouts: React.FC = () => {
  return (
    <div className="bg-base-gray">
      <HeroSection />

      <NewProductBlockMan />
      <NewProductBlockWoman />

      <NewCategoryBlock />
    </div>
  );
};

export default MainLayouts;
