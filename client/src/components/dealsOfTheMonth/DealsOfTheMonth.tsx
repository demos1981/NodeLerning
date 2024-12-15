import { dealsOfTheMonthData } from "data";
import React from "react";

export const DealsOfTheMonth: React.FC = () => {
  return (
    <section className="relative   mx-auto max-w-7xl">
      <div className="flex flex-row justify-evenly">
        {dealsOfTheMonthData.map((deals) => (
          <div
            key={deals.id}
            className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark"
          >
            <p>{deals.title}</p>
            <img src={deals.image} alt={deals.title} />
          </div>
        ))}
      </div>
      <div className="flex ml-14"></div>
    </section>
  );
};
