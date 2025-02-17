import React from "react";
import { WomansProduct } from "components";

export const WomansProductPage: React.FC = () => {
  const womansProducts = [
    {
      id: 1,
      name: "Women's Dress",
      price: "$49.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Women's Shoes",
      price: "$59.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Women's Handbag",
      price: "$89.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Women's Scarf",
      price: "$19.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <WomansProduct products={womansProducts} />
    </div>
  );
};
