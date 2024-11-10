import React from "react";

import { HeroSection } from "components";
import { NewProductBlockMan } from "components";
import { NewProductBlockWoman } from "components";
import { NewCategoryBlock } from "components";

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <NewProductBlockMan />
      <NewProductBlockWoman />
      <NewCategoryBlock />
    </div>
  );
};
