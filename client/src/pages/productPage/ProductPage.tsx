import React from "react";
import { HeaderLayouts } from "layouts";
import { ProductDisplay } from "components";

export const ProductPage: React.FC = () => {
  const product = {
    id: 1,
    price: 100,
    description: "Product",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
    name: "Sample Product",
    color: "Red",
  };
  return (
    <>
      <HeaderLayouts />
      <ProductDisplay
        id={product.id}
        name={product.name}
        color={product.color}
      />
    </>
  );
};
