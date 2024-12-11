import React from "react";
import { ourBestsellerData } from "data";

export const OurBestseller: React.FC = () => {
  return (
    <section className="relative   mx-auto max-w-7xl">
      <div className="flex mt-6 mb-6 justify-center items-center">
        <p className=" text-base-gray-dark">Our Bestseller</p>
      </div>
      <div className="flex flex-row justify-evenly">
        {ourBestsellerData.map((category) => (
          <div
            key={category.id}
            className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark"
          >
            <p>{category.price}</p>
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </section>
  );
};
