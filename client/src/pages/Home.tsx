import React from "react";
import HeaderLayouts from "../layouts/HeaderLayouts";
import MainLayouts from "../layouts/MainLayouts";

const Home: React.FC = () => {
  return (
    <div>
      <HeaderLayouts />
      <MainLayouts />
    </div>
  );
};

export default Home;
