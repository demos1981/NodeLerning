import React from "react";
import HeroSection from "../components/HeroSection";
import NewProductBlock from "../components/NewProductBlock";
import NewCategoryBlock from "../components/NewCategoryBlock";

const MainLayouts: React.FC = () => {
  return (
    <div className="">
      <HeroSection />

      <NewProductBlock />

      <NewCategoryBlock />
    </div>
  );
};

export default MainLayouts;
