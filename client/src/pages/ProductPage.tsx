import React from "react";
import HeaderLayouts from "../layouts/HeaderLayouts";
import ProductDisplay from "../components/ProductDisplay";

const ProductPage: React.FC = () => {
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
        price={product.price}
        description={product.description}
        image={product.image}
        name={product.name}
        color={product.color}
      />
    </>
  );
};

export default ProductPage;
