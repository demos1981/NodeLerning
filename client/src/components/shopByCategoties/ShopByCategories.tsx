import React from "react";
import { shopByCategoriesData } from "data";

export const ShopByCategories: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-7xl">
      <div className="flex">
        <p className="flex mt-6 mb-2 justify-center w-72 h-20 items-center text-base-gray-dark text-lg font-extralight">
          Shop by Categories
        </p>
      </div>
      <div className="flex flex-row justify-evenly mb-10">
        {shopByCategoriesData.map((category) => (
          <div
            key={category.id}
            className="flex flex-col justify-center max-w-52 max-h-fit"
          >
            <div>
              <img src={category.image} alt={category.name} />
            </div>

            <div className="w-28 bg-secondary relative left-2 rounded-md bottom-14">
              <p className="ml-1">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
