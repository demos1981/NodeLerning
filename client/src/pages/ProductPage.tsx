import React from "react";
import HeaderLayouts from "../layouts/HeaderLayouts";
import Product from "../components/Product";

const ProductPage: React.FC = () => {
  return (
    <>
      <h1>Product</h1>
      <HeaderLayouts />
      <Product />
    </>
  );
};

export default ProductPage;
