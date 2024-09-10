import React from "react";
import MensProduct from "../components/MensProduct";

const MensProductPage: React.FC = () => {
  const mensProducts = [
    {
      id: 1,
      name: "Men's Jacket",
      price: "$79.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Men's Shoes",
      price: "$59.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Men's Watch",
      price: "$99.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Men's T-Shirt",
      price: "$19.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <MensProduct products={mensProducts} />
    </div>
  );
};

export default MensProductPage;
