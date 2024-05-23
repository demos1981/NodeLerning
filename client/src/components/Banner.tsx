import React from "react";
import banner_1 from "../assets/banner_1.jpg";
import banner_small_1 from "../assets/banner_small_1.jpg";
import banner_small_2 from "../assets/banner_small_2.jpg";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-row gap-10 lg:gap-20 justify-around pt-1">
      <div className="flex  items-center flex-shrink-0 box-border max-w-4xl max-h-fit ml-4">
        <a href="/">
          <img src={banner_1} alt="banner_1" />
        </a>
      </div>
      <div className="flex flex-row">
        <div className="flex  items-center flex-shrink-0 box-border  max-w-64 max-h-fit mr-6">
          <a href="/">
            <img src={banner_small_1} alt="banner_small_1" />
          </a>
        </div>
        <div className="flex items-center flex-shrink-0 box-border  max-w-64 max-h-fit mr-6">
          <a href="/">
            <img src={banner_small_2} alt="banner_small_2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
