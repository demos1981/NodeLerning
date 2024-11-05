import React from "react";
import AccessoriesProduct from "components/accesoriesProduct";

const AccessoriesProductPage: React.FC = () => {
  const accessoriesProducts = [
    {
      id: 1,
      name: "Leather Belt",
      price: "$29.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Sunglasses",
      price: "$49.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Wristwatch",
      price: "$199.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Backpack",
      price: "$79.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <AccessoriesProduct products={accessoriesProducts} />
    </div>
  );
};

export default AccessoriesProductPage;
