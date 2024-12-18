import { ourInstagramStoriesData } from "data";
import React from "react";

export const OurInstagramStories: React.FC = () => {
  return (
    <section className=" relative   mx-auto max-w-7xl">
      <div className="flex mt-6 mb-6 justify-center items-center">
        <p className=" text-base-gray-dark">Our Instagram Stories</p>
      </div>
      <div className="flex flex-row justify-evenly">
        {ourInstagramStoriesData.map((stories) => (
          <div
            key={stories.id}
            className="max-w-40 max-h-fit border-2 rounded-lg border-base-gray-dark"
          >
            <img src={stories.image} alt={stories.name} />
            <p>{stories.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
