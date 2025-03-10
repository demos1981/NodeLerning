import React from "react";

import {
  DealsOfTheMonth,
  HeroSection,
  ShopByCategories,
  OurBestseller,
  WhatOurCustomerSays,
  OurInstagramStories,
  OurBenefits,
} from "components";

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ShopByCategories />
      <OurBestseller />
      <DealsOfTheMonth />
      <WhatOurCustomerSays />
      <OurInstagramStories />
      <OurBenefits />
    </div>
  );
};
