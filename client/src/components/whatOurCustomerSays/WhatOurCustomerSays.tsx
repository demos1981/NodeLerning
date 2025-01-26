import { whatCustomerSaysData } from "data";
import React from "react";

export const WhatOurCustomerSays: React.FC = () => {
  return (
    <section className="relative   mx-auto max-w-7xl">
      <div className="flex flex-col ml-14">
        <p className="flex  mt-6 justify-center w-64 h-12 items-center text-base-gray-dark font-semibold text-xl">
          What our Customer say's
        </p>
        <div className="flex flex-row justify-between">
          {whatCustomerSaysData.map((customer) => (
            <div key={customer.id} className="max-w-80 max-h-fit ">
              <img className=" h-14" src={customer.stars} alt={customer.name} />
              <p className="h-28">{customer.comment}</p>
              <div className="flex flex-row items-center">
                <img
                  className="rounded-[50%] h-14"
                  src={customer.image}
                  alt={customer.name}
                />
                <p className="ml-2">{customer.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
