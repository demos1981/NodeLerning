import React from "react";
import HeaderLayouts from "../layouts/HeaderLayouts";
import MainLayouts from "../layouts/MainLayouts";
import FooterLayouts from "../layouts/FooterLayouts";

const Home: React.FC = () => {
  return (
    <div>
      <HeaderLayouts />
      <MainLayouts />
      <FooterLayouts />
    </div>
  );
};

export default Home;
