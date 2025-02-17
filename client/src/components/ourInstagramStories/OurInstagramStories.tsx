import { ourInstagramStoriesData } from "data";
import React from "react";

export const OurInstagramStories: React.FC = () => {
  return (
    <section className=" relative   mx-auto max-w-7xl">
      <div className="flex mt-6 mb-6 justify-center items-center">
        <p className=" flex  mt-6 justify-center w-64 h-12 items-center text-base-gray-dark font-semibold text-xl">
          Our Instagram Stories
        </p>
      </div>
      <div className="flex flex-row justify-evenly mb-6">
        {ourInstagramStoriesData.map((stories) => (
          <div key={stories.id} className="">
            <img src={stories.image} alt={stories.name} />
          </div>
        ))}
      </div>
    </section>
  );
};
