import React from "react";
import { ProductProps } from "types/productTypes";

export const ProductDisplay: React.FC<ProductProps> = ({
  articles,
  brand,
  name,
  description,
  quantity,
  price,
  barcode,
  color,
  size,
  role,
  sex,
  category,
}) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">Color: {color}</p>
        </div>
      </div>
    </>
  );
};
