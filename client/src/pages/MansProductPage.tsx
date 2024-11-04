import React from "react";
import MansProduct from "../components/mansProduct";

const MansProductPage: React.FC = () => {
  const mansProducts = [
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
    {
      id: 5,
      name: "Men's Jacket",
      price: "$79.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Men's Shoes",
      price: "$59.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Men's Watch",
      price: "$99.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Men's T-Shirt",
      price: "$19.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <MansProduct products={mansProducts} />
    </div>
  );
};

export default MansProductPage;
