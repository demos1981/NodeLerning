import React from "react";
import { HeroSection } from "../components/index";
import { NewProductBlockMan } from "../components/index";
import { NewCategoryBlock } from "../components/index";
import { NewProductBlockWoman } from "../components/index";

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
