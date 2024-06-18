import React from "react";
import HeaderLayouts from "../layouts/HeaderLayouts";
import Product from "../components/Product";

const ProductPage: React.FC = () => {
  return (
    <div>
      <HeaderLayouts />
      <Product />
    </div>
  );
};

export default ProductPage;
