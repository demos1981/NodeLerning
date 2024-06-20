import React from "react";
import HeaderLayouts from "../layouts/HeaderLayouts";
import ProductDisplay from "../components/ProductDisplay";

const ProductPage: React.FC = () => {
  const product = {
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
    name: "Sample Product",
    color: "Red",
  };
  return (
    <>
      <HeaderLayouts />
      <ProductDisplay
        image={product.image}
        name={product.name}
        color={product.color}
      />
    </>
  );
};

export default ProductPage;
