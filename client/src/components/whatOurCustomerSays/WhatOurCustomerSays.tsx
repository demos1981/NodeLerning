import { whatCustomerSaysData } from "data";
import React from "react";

export const WhatOurCustomerSays: React.FC = () => {
  return (
    <section className="relative   mx-auto max-w-7xl">
      <div className="flex flex-col ml-14">
        <p className="flex  ml-4 mt-6 mb-2 justify-center w-48 h-12 items-center text-base-gray-dark">
          What our Customer say's
        </p>
        <div className="flex flex-row justify-evenly">
          {whatCustomerSaysData.map((customer) => (
            <div
              key={customer.id}
              className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark"
            >
              <p>{customer.comment}</p>
              <img src={customer.image} alt={customer.name} />
              <p>{customer.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
