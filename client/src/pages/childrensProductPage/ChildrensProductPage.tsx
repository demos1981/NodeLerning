import React from "react";
import { ChildrensProduct } from "components";

export const ChildrensProductPage: React.FC = () => {
  const childrensProducts = [
    {
      id: 1,
      name: "Children's T-Shirt",
      price: "$14.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Children's Shoes",
      price: "$29.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Children's Backpack",
      price: "$39.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Children's Hat",
      price: "$9.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <ChildrensProduct products={childrensProducts} />
    </div>
  );
};
