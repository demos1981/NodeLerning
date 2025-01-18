import { dealsOfTheMonthData } from "data";
import React from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TimeLine } from "components/timeline/TimeLine";

export const DealsOfTheMonth: React.FC = () => {
  return (
    <section className="relative   mx-auto max-w-7xl">
      <div className="flex flex-row justify-evenly">
        {dealsOfTheMonthData.map((deals) => (
          <div
            key={deals.id}
            className="flex flex-row max-w-fit max-h-fit  mt-10 items-center"
          >
            <div className="max-w-fit h-52 ">
              <p className="text-5xl font-normal">{deals.title}</p>
              <p className="mr-10">{deals.description}</p>
              <TimeLine deadline="December 31 2025 23:59:59 GMT+02:00" />
              <div className="mt-10">
                <div className=" flex w-40 h-10 bg-base-gray-dark text-secondary rounded-md justify-center text-sm">
                  <Link to={deals.link} className="flex flex-row items-center ">
                    {deals.linkTitle}
                    <MoveRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src={deals.image} alt={deals.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex ml-14"></div>
    </section>
  );
};
