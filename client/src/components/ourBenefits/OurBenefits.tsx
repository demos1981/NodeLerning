import { ourBenefitsData } from "data";
import React from "react";

export const OurBenefits: React.FC = () => {
  return (
    <section className="relative   mx-auto max-w-7xl">
      <div className="flex">
        <div>
          <p className=" flex  mb-6 mt-6 justify-center w-64 h-12 items-center text-base-gray-dark font-semibold text-xl">
            Our Benefits
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        {ourBenefitsData.map((benefits) => (
          <div key={benefits.id} className="max-w-52 max-h-fit mb-10">
            <img className="mb-3" src={benefits.image} alt={benefits.title} />
            <p className="mb-3 font-semibold">{benefits.title}</p>
            <p className="font-extralight text-xs">{benefits.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
