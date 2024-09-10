import React from "react";
import HeroSection from "../components/HeroSection";
import NewProductBlockMan from "../components/NewProductBlockMan";
import NewCategoryBlock from "../components/NewCategoryBlock";
import NewProductBlockWoman from "../components/NewProductBlockWoman";

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
