import React from "react";
import { ourBestsellerData } from "data";

export const OurBestseller: React.FC = () => {
  return (
    <section className="relative   mx-auto max-w-7xl">
      <div className="flex mt-6 mb-6 justify-center items-center">
        <p className=" text-base-gray-dark font-semibold text-xl">
          Our Bestseller
        </p>
      </div>
      <div className="flex flex-row justify-evenly">
        {ourBestsellerData.map((category) => (
          <div key={category.id} className="max-w-52 max-h-fit rounded-lg">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
            <p>{category.description}</p>
            <p>
              <span
                className="text-base-darkGreen
              "
              >
                {category.price}
              </span>
              <span> {category.currency}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
