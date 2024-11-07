import React from "react";
import { BagsProduct } from "components";

export const BagsProductPage: React.FC = () => {
  const bagsProducts = [
    {
      id: 1,
      name: "Leather Tote Bag",
      price: "$79.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Travel Backpack",
      price: "$99.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Handbag",
      price: "$129.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Messenger Bag",
      price: "$89.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <BagsProduct products={bagsProducts} />
    </div>
  );
};
