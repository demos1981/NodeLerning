import React from "react";
import { ProductProps } from "../types/data";

const ProductDysplay: React.FC<ProductProps> = ({
  id,
  price,
  description,
  image,
  name,
  color,
}) => {
  return (
    <>
      <div>{id}</div>
      <div>{price}</div>
      <div>{description}</div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <img className="w-full" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">Color: {color}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDysplay;