import React from "react";
import { shopByCategoriesData } from "data";

export const ShopByCategories: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-7xl">
      <div className="flex ml-14">
        <p className="flex ml-4 mt-6 mb-2 justify-center w-72 h-20 items-center text-base-gray-dark">
          Shop by Categories
        </p>
      </div>
      <div className="flex flex-row justify-evenly">
        {shopByCategoriesData.map((category) => (
          <div
            key={category.id}
            className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark"
          >
            <p>{category.description}</p>
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </section>
  );
};
