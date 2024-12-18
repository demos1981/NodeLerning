import { ourBenefitsData } from "data";
import React from "react";

export const OurBenefits: React.FC = () => {
  return (
    <section className="relative   mx-auto max-w-7xl">
      <div className="flex ml-14">
        <div>Our Benefits</div>
      </div>
      <div className="flex flex-row justify-evenly">
        {ourBenefitsData.map((benefits) => (
          <div
            key={benefits.id}
            className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark"
          >
            <img src={benefits.image} alt={benefits.title} />
            <p>{benefits.title}</p>
            <p>{benefits.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
