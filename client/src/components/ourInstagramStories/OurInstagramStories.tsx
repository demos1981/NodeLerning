import React from "react";
import minBanner1 from "assets/minBanner1.jpg";
import minBanner2 from "assets/minBanner2.jpg";
import minBanner3 from "assets/minBanner3.jpg";

export const OurInstagramStories: React.FC = () => {
  return (
    <section className=" relative   mx-auto max-w-7xl">
      <div className="flex mt-6 mb-6 justify-center items-center">
        <p className=" text-base-gray-dark">Our Instagram Stories</p>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="mr-2">
          <img className="max-w-60 " src={minBanner1} alt="minBanner"></img>
        </div>
        <div className="mr-2">
          <img className="max-w-72 " src={minBanner2} alt="minBanner"></img>
        </div>
        <div className="mr-2">
          <img className="max-w-60 " src={minBanner3} alt="minBanner"></img>
        </div>
      </div>
    </section>
  );
};
