import React from "react";
import ArrivalProduct from "../components/ArrivalProduct";

const ArrivalProductPage: React.FC = () => {
  const arrivalProducts = [
    {
      id: 1,
      name: "Smart Watch",
      price: "$199.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: "$149.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: "$299.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Sneakers",
      price: "$99.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <ArrivalProduct products={arrivalProducts} />
    </div>
  );
};
export default ArrivalProductPage;
